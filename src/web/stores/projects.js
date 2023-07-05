import api from "@/web/api";
import { create } from "zustand";

export const useProjectStore = create((set) => ({
	projects: [],
	setProjects: (projects) => set({ projects }),
	getProjects: async () => {
		try {
			const {
				data: { result },
			} = await api.get("/project");
			set({ projects: result });
			console.log(result);
		} catch (error) {
			return;
		}
	},
}));
