import { useProjectStore } from "@/web/stores/projects";

const useProjects = () => {
	const { getProjects, projects, ...projectsRouter } = useProjectStore();

	if (projects.length === 0) {
		getProjects();
	}

	return { getProjects, projects, ...projectsRouter };
};

export default useProjects;
