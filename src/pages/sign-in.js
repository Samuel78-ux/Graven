import Field from "@/components/Field";
import Form from "@/components/Form";

const initialValues = {
	email: "",
	password: "",
};

const SignIn = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<Form
				title="Sign In"
				initialValues={initialValues}
				onSubmit={handleSubmit}
				className="w-72"
			>
				<Field name="email" placeholder="Email" />
				<Field name="password" placeholder="Mot de passe" type="password" />
				<button
					type="submit"
					className="w-full bg-blue-400 text-white font-bold rounded px-2 py-1 hover:bg-blue-600 transition-all"
				>
					Se connecter
				</button>
			</Form>
		</div>
	);
};

export default SignIn;
