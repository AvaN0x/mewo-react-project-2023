import { patchUser } from "api/auth";
import { useAuth } from "components/context/AuthProvider";
import Input from "components/form/Input";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditUSerData() {
	const { user, accessToken, refreshToken, setData } =
		useAuth() as Required<AuthContext>;
	const navigate = useNavigate();

	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [error, setError] = useState<string | undefined>(undefined);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setError(undefined);
		try {
			const newUser = await patchUser({
				userId: user.id,
				name,
				email,
			});

			setData({
				user: newUser,
				accessToken,
				refreshToken,
			});
			navigate("/");
		} catch (error) {
			console.error(error);
			setError((error as Error).message);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="max-w-[450px]">
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
				{error && <span className="text-red-600">{error}</span>}
				<button
					type="submit"
					className="block bg-primary w-full rounded-sm py-1 font-light hover:font-normal transition-all hover:opacity-90"
				>
					Change user data
				</button>
			</form>
		</>
	);
}
