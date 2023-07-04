import Field from "@/components/Field";
import Form from "@/components/Form";

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Register = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<Form
				title="Register"
				initialValues={initialValues}
				onSubmit={handleSubmit}
				className="w-72"
			>
				<Field name="firstname" placeholder="Prénom" />
				<Field name="lastname" placeholder="Nom" />
				<Field name="email" placeholder="Email" />
				<Field name="password" placeholder="Mot de passe" type="password" />
				<Field
					name="confirmPassword"
					placeholder="Confirmer le mot de passe"
					type="password"
				/>
				<button
					type="submit"
					className="w-full bg-blue-400 text-white font-bold rounded px-2 py-1 hover:bg-blue-600 transition-all"
				>
					S'inscrire
				</button>
			</Form>
		</div>
	);
};

export default Register;
