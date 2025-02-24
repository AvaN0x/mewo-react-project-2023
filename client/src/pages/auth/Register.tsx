import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAuth } from "components/context/AuthProvider";
import { register } from "api/auth";
import Input from "components/form/Input";
import Header from "components/Header";

export default function Register() {
	const { setData } = useAuth();
	const navigate = useNavigate();

	const [name, setName] = useState("fake name");
	const [email, setEmail] = useState("avafake@example.com");
	const [password, setPassword] = useState("password1£");
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
			<Header>Sign in</Header>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Name"
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
					label="Password"
					required
				/>
				{error && <span className="text-red-600">{error}</span>}

				<button
					type="submit"
					className="block bg-primary w-full rounded-sm py-1 font-light hover:font-normal transition-all hover:opacity-90"
				>
					Register
				</button>
			</form>
			<span className="text-xs dark:text-gray-200">
				Already have an account ?{" "}
				<Link to="/auth/login" className="text-primary">
					Login
				</Link>
			</span>
		</>
	);
}
