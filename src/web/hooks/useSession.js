import { useSessionStore } from "../stores/session";

const useSession = () => {
	const { setToken, session, ...sessionRouter } = useSessionStore();

	if (!session) {
		setToken();
	}

	return { session, setToken, ...sessionRouter };
};

export default useSession;
