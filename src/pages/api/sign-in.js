import config from "@/api/config.js";
import mw from "@/api/utils/mw";
import hashPassword from "@/api/utils/hashPassword";
import { PrismaClient } from "@prisma/client";
import jsonwebtoken from "jsonwebtoken";

const prisma = new PrismaClient();

const handler = mw({
	POST: [
		async (req, res) => {
			const { email, password } = req.body;
			const passwordHash = hashPassword(password);
			const user = await prisma.user.findUnique({
				where: {
					email,
				},
			});

			if (!user || user.passwordHash !== passwordHash) {
				res.status(401).send({ error: "Invalid credentials" });

				return;
			}

			const sessionToken = jsonwebtoken
				.sign(
					{
						payload: {
							userId: user.id,
						},
					},
					config.security.jwt.secret,
					{ expiresIn: config.security.jwt.expiresIn }
				)
				.toString("hex");

			res.send({ result: sessionToken });
		},
	],
});

export default handler;
