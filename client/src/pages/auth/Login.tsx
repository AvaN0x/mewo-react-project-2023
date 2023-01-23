import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import Input from "../../components/form/Input";
import { useAuth } from "../../components/context/AuthProvider";
import { FormEvent, useState } from "react";

export default function Login() {
	const { setData } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | undefined>(undefined);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setError(undefined);
		try {
			const sessionData = await login({
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
				Se connecter
			</h1>
			<form onSubmit={handleSubmit}>
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
					Connexion
				</button>
			</form>
			<span className="text-xs dark:text-gray-200">
				Besoin d'un compte ?{" "}
				<Link to="/auth/register" className="text-primary">
					S'inscrire
				</Link>
			</span>
		</>
	);
}
