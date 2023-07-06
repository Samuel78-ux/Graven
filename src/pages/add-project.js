import Field from "@/Components/Field";
import Form from "@/Components/Form";
import Page from "@/Components/Page";
import api from "@/web/api";
import { useState } from "react";

const initialValues = {
	name: "",
	description: "",
	price: 0,
	duration: 0,
};

const AddProject = () => {
	const [image, setImage] = useState(null);

	const handleSubmit = async ({ name, description, price, duration }) => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("description", description);
		formData.append("price", price);
		formData.append("duration", duration);
		formData.append("image", image);

		try {
			const response = await api.post("/project", formData);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleFileUpload = (event) => {
		const file = event.target.files;

		if (file?.item(0)) {
			setImage(file.item(0));
		}
	};

	return (
		<Page>
			<div className="w-screen flex justify-center mt-4">
				<Form
					onSubmit={handleSubmit}
					initialValues={initialValues}
					title="Créer un projet"
					className="w-80"
				>
					<Field name="name" placeholder="Nom" />
					<Field name="description" placeholder="Description" />
					<Field name="price" placeholder="Prix" />
					<Field name="duration" placeholder="Durée du projet (en mois)" />
					<input
						type="file"
						accept="image/png, image/jpeg, image/jpg"
						onChange={handleFileUpload}
						className="w-full"
					/>
					<button type="submit" className="bg-blue-500 text-white rounded p-2">
						Ajouter
					</button>
				</Form>
			</div>
		</Page>
	);
};

export default AddProject;
