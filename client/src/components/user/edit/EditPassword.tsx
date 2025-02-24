import { patchUser } from "api/auth";
import { useAuth } from "components/context/AuthProvider";
import Input from "components/form/Input";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPassword() {
	const { user, accessToken, refreshToken, setData } =
		useAuth() as Required<AuthContext>;
	const navigate = useNavigate();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | undefined>(undefined);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			return setError("The two password are differents");
		}

		setError(undefined);
		try {
			const newUser = await patchUser({
				userId: user.id,
				password,
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
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="New password"
					required
				/>
				<Input
					type="password"
					name="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					label="Confirm new password"
					required
				/>
				{error && <span className="text-red-600">{error}</span>}
				<button
					type="submit"
					className="block bg-primary w-full rounded-sm py-1 font-light hover:font-normal transition-all hover:opacity-90"
				>
					Change Password
				</button>
			</form>
		</>
	);
}
