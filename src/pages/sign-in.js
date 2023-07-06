import api from "@/web/api";
import Field from "../Components/Field";
import Form from "../Components/Form";
import Page from "../Components/Page";
import useSession from "@/web/hooks/useSession";
import * as yup from "yup";
import { useRouter } from "next/router";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.email("Email invalide")
		.required("Ce champ est requis"),
	password: yup
		.string()
		.min(8, "Minimum 8 caractères")
		.required("Ce champ est requis"),
});

const SignIn = () => {
	const { signIn } = useSession();
	const router = useRouter();

	const handleSubmit = async (values) => {
		try {
			const response = await api.post("/sign-in", values);
			signIn(response);
			router.push("/");
		} catch (error) {
			return;
		}
	};

	return (
		<Page>
			<div className='flex justify-center items-center h-screen absolute w-screen -z-10'>
				<Form
					title='Connexion'
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
					className='w-72'
				>
					<Field
						name='email'
						placeholder='Email'
					/>
					<Field
						name='password'
						placeholder='Mot de passe'
						type='password'
					/>
					<button
						type='submit'
						className='w-full bg-blue-400 text-white font-bold rounded px-2 py-1 hover:bg-blue-600 transition-all'
					>
						Se connecter
					</button>
				</Form>
			</div>
		</Page>
	);
};

export default SignIn;
