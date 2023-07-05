import hashPassword from "@/api/utils/hashPassword";
import mw from "@/api/utils/mw";

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
				console.error(err);
				res.send({ error: "Something wrong." });
			}
		},
	],
});

export default handler;
