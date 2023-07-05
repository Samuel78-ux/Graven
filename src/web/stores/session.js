import config from "@/web/config";
import jsonwebtoken from "jsonwebtoken";
import { create } from "zustand";

const getPayload = (jwt) => {
	return jsonwebtoken.decode(jwt).payload;
};

export const useSessionStore = create((set) => ({
	session: null,
	setSession: (session) => set({ session }),
	signIn: async (response) => {
		const {
			data: { result: jwt },
		} = response;

		const payload = getPayload(jwt);
		localStorage.setItem(config.session.localStorageKey, jwt);

		set({ session: payload });
	},
	signOut: () => {
		set({ session: null });
		localStorage.removeItem(config.session.localStorageKey);
	},
	setToken: () => {
		if (typeof window !== "undefined") {
			const jwt = localStorage.getItem(config.session.localStorageKey);

			if (jwt) {
				set({ session: getPayload(jwt) });

				return;
			}
		}
	},
}));
