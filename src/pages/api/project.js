import auth from "@/api/middlewares/auth";
import mw from "@/api/utils/mw";
import { PrismaClient } from "@prisma/client";
import multer from "multer";

export const config = {
	api: {
		bodyParser: false,
	},
};

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images"); // Répertoire de destination des images
	},
	filename: (req, file, cb) => {
		const fileName = `${Date.now()}-${file.originalname}`; // Nom de fichier personnalisé
		cb(null, fileName);
	},
});

const upload = multer({ storage });

const prisma = new PrismaClient();

const handler = mw({
	POST: [
		auth,
		upload.single("image"),
		async (req, res) => {
			const { file, body, user } = req;
			const { name, description, price, duration } = body;

			try {
				const project = await prisma.project.create({
					data: {
						name,
						description,
						price: parseInt(price),
						duration: parseInt(duration),
						image: file.filename,
						userId: user.id,
					},
				});
				res.send({ result: project });
			} catch (error) {
				console.log(error);
				res.status(500).send({ error: "Something went wrong." });
			}
		},
	],
	GET: [
		async (req, res) => {
			try {
				const projects = await prisma.project.findMany();
				res.send({ result: projects });
			} catch (error) {
				res.status(500).send({ error: "Something went wrong." });
			}
		},
	],
});

export default handler;
