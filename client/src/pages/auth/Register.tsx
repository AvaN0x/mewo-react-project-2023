import { Form, Link } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import { register } from "../../api/auth";
import Input from "../../components/form/Input";

export async function action({ params, request }: ActionFunctionArgs) {
	// TODO
	return null;
}

export default function Register() {
	return (
		<>
			<h1 className="text-center text-gray-900 text-xl pb-3 dark:text-white ">
				S'inscrire
			</h1>
			<Form method="post">
				<Input type="text" name="name" label="Nom" required />
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
					Inscription
				</button>
			</Form>
			<span className="text-xs">
				Tu as déjà un compte ?{" "}
				<Link to="/auth/login" className="text-primary">
					Se connecter
				</Link>
			</span>
		</>
	);
}
