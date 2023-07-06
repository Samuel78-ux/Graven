import Page from "../Components/Page";
import ProjectList from "../Components/ProjectLists";

const dashbord = () => {
	const users = [
		{
			id: 1,
			investi: "1000€",
			projet: "Hospita Val d'oise",
			dateFin: "12/12/2021",
		},
		{
			id: 2,
			investi: "3000€",
			projet: "Résidence Val d'oise",
			dateFin: "12/12/2023",
		},
		{
			id: 3,
			investi: "5000€",
			projet: "Bunker",
			dateFin: "05/06/2023",
		},
	];
	return (
		<Page>
			<ProjectList users={users} />
		</Page>
	);
};

export default dashbord;
