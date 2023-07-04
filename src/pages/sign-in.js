import Field from "@/components/Field";
import Form from "@/components/Form";
import Page from "@/components/Page";

const initialValues = {
	email: "",
	password: "",
};

const SignIn = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<Page>
			<div className="flex justify-center items-center absolute h-screen w-screen">
				<Form
					title="Sign In"
					initialValues={initialValues}
					onSubmit={handleSubmit}
					className="w-80"
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
		</Page>
	);
};

export default SignIn;
