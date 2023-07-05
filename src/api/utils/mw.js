const mw = (handlersByMethod) => async (req, res, next) => {
	const { method } = req;
	const handlers = handlersByMethod[method];

	if (!handlers) {
		res.status(404).send({ error: "Not found." });

		return;
	}

	try {
		let handlerIndex = 0;

		const next = async () => {
			const handler = handlers[handlerIndex];
			handlerIndex += 1;

			await handler(req, res, next);
		};
		await next();
	} catch (err) {
		if (next) {
			next(err);
		}
	}
};

export default mw;
