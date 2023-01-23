import { Form, Link } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import { login } from "../../api/auth";
import Input from "../../components/form/Input";

export async function action({ params, request }: ActionFunctionArgs) {
	const formData = await request.formData();
	await login({
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	});
	return null;
}

export default function Login() {
	return (
		<>
			<h1 className="text-center text-gray-900 text-xl pb-3 dark:text-white ">
				Se connecter
			</h1>
			<Form method="post">
				<Input type="email" name="email" label="E-mail" required />
				<Input
					type="password"
					name="password"
					label="Mot de passe"
					required
				/>
				<button
					type="submit"
					className="block bg-primary w-full rounded-sm py-1 font-light"
				>
					Connexion
				</button>
			</Form>
			<span className="text-xs">
				Besoin d'un compte ?{" "}
				<Link to="/auth/register" className="text-primary">
					S'inscrire
				</Link>
			</span>
		</>
	);
}
