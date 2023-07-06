import useProjects from "@/web/hooks/useProjects";

const ProjectList = ({ users }) => {
	// const { projects } = useProjects();
	// console.log(projects);
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Liste des Projets :</h2>
			<ul className="bg-white rounded shadow-md p-4">
				{users.map((user) => (
					<li key={user.id} className="mb-4">
						<h3 className="text-lg font-bold mb-2">{user.dateFin}</h3>
						<p className="mb-1">
							<strong>Projet :</strong> {user.projet}
						</p>
						<p>
							<strong>Investi :</strong> {user.investi}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;
