import { useRouter } from "next/router";
import Field from "../Components/Field";
import Form from "../Components/Form";
import Page from "../Components/Page";
import api from "@/web/api";
import * as yup from "yup";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const validationSchema = yup.object().shape({
	firstName: yup.string().required("Ce champ est requis"),
	lastName: yup.string().required("Ce champ est requis"),
	email: yup.string().email("Email invalide").required("Ce champ est requis"),
	password: yup
		.string()
		.min(8, "Minimum 8 caractères")
		.required("Ce champ est requis"),
	confirmPassword: yup
		.string()
		.required("Ce champ est requis")
		.test(
			"match",
			"Vous devez mettre les mêmes mot de passe",
			function (value) {
				return value === this.parent.password;
			}
		),
});

const Register = () => {
	const router = useRouter();
	const handleSubmit = async (values, { resetForm }) => {
		try {
			await api.post("/sign-up", values);
			router.push("/sign-in");
		} catch (error) {
			resetForm();
		}
	};

	return (
		<Page>
			<div className="flex justify-center items-center h-screen absolute w-screen -z-10">
				<Form
					title="Inscription"
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
					className="w-72"
				>
					<Field name="firstName" placeholder="Prénom" />
					<Field name="lastName" placeholder="Nom" />
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
		</Page>
	);
};

export default Register;
