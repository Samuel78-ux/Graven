const mw = (handle) => async (req, res, next) => {
	try {
		await handle(req, res, next);
	} catch (err) {
		if (next) {
			next(err);
		}
	}
};

export default mw;
