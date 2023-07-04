import Page from "@/components/Page";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
	return (
		<Page>
			<div className="flex flex-col px-12 py-6">
				<p className="text-center font-medium text-xl border-b-2 border-blue-500 w-fit mx-auto">
					Les différents projets
				</p>
				<div className="flex flex-wrap gap-10 justify-center py-6">
					{[...Array(10)].map((x, i) => (
						<ProjectCard
							key={i}
							src="/house.jpg"
							name="Maison"
							description="Une maison"
							price="1000"
							duration="1 mois"
						/>
					))}
				</div>
			</div>
		</Page>
	);
}
