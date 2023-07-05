import hashPassword from "@/api/utils/hashPassword";
import mw from "@/api/utils/mw";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = mw({
	POST: [
		async (req, res) => {
			const { email, password, firstName, lastName } = req.body;

			try {
				const user = await prisma.user.create({
					data: {
						email,
						passwordHash: hashPassword(password),
						lastName,
						firstName,
					},
				});

				res.send({ result: user });
			} catch (err) {
				res.status(500).send({ error: "Something wrong." });
			}
		},
	],
});

export default handler;
