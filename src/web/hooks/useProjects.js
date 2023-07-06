import { useProjectStore } from "@/web/stores/projects";
import { useEffect } from "react";

const useProjects = () => {
	const { getProjects, projects, ...projectsRouter } = useProjectStore();

	useEffect(() => {
		if (projects.length === 0) {
			getProjects();
		}
	}, [getProjects, projects.length]);

	return { getProjects, projects, ...projectsRouter };
};

export default useProjects;
