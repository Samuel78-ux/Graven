import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";
import useProjects from "@/web/hooks/useProjects";

export default function Home() {
	const { projects } = useProjects();

	return (
		<Page>
			<div className="flex flex-col px-12 py-6">
				<p className="text-center font-medium text-xl border-b-2 border-blue-500 w-fit mx-auto">
					Les différents projets
				</p>
				<div className="flex flex-wrap gap-10 justify-center py-6">
					{projects.map(
						({ name, image, description, price, duration }, index) => (
							<ProjectCard
								key={index}
								src={`/images/${image}`}
								name={name}
								description={description}
								price={price}
								duration={duration}
							/>
						)
					)}
				</div>
			</div>
		</Page>
	);
}
