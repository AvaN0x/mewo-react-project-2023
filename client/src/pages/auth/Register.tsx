import { Form, Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import Input from "../../components/form/Input";
import { useAuth } from "../../components/context/AuthProvider";
import { FormEvent, useState } from "react";

export default function Register() {
	const { setData } = useAuth();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | undefined>(undefined);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setError(undefined);
		try {
			const sessionData = await register({
				name,
				email,
				password,
			});

			if (!setData) {
				throw Error("Auth provider has not been initialized.");
			}

			setData({
				user: sessionData.user,
				accessToken: sessionData.tokens.access.token,
				refreshToken: sessionData.tokens.refresh.token,
			});
			navigate("/");
		} catch (error) {
			console.error(error);
			setError((error as Error).message);
		}
	};

	return (
		<>
			<h1 className="text-center text-gray-900 text-xl pb-3 dark:text-white ">
				S'inscrire
			</h1>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Nom"
					required
				/>
				<Input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="E-mail"
					required
				/>
				<Input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Mot de passe"
					required
				/>
				{error && <span className="text-red-800">{error}</span>}

				<button
					type="submit"
					className="block bg-primary w-full rounded-sm py-1 font-light"
				>
					Inscription
				</button>
			</form>
			<span className="text-xs dark:text-gray-200">
				Tu as déjà un compte ?{" "}
				<Link to="/auth/login" className="text-primary">
					Se connecter
				</Link>
			</span>
		</>
	);
}
