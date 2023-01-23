import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth";
import { useAuth } from "../context/AuthProvider";
import ThemeButton from "../ThemeButton";

export default function Header() {
	const navigate = useNavigate();
	const { setData, refreshToken } = useAuth();

	const handleDisconnect = async () => {
		if (setData) {
			try {
				if (refreshToken) {
					await logout(refreshToken);
				}
			} catch (error) {
			} finally {
				setData();
				navigate("/auth/login");
			}
		}
	};

	return (
		<header className="flex fixed top-0 left-0 right-0 h-12 w-screen bg-primary">
			top bar
			<ThemeButton />
			<button onClick={handleDisconnect}>Log out</button>
		</header>
	);
}
