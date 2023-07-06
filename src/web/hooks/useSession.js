import { useEffect } from "react";
import { useSessionStore } from "../stores/session";

const useSession = () => {
	const { setToken, session, ...sessionRouter } = useSessionStore();

	useEffect(() => {
		if (!session) {
			setToken();
		}
	}, [session, setToken]);

	return { session, setToken, ...sessionRouter };
};

export default useSession;
