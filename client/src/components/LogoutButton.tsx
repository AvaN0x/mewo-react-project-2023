import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/context/AuthProvider";
import { logout } from "api/auth";

export default function LogoutButton({ className }: { className?: string }) {
	const navigate = useNavigate();
	const { setData, refreshToken } = useAuth();

	const handleClick = async () => {
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
		<Button className={className} onClick={handleClick}>
			<FontAwesomeIcon icon={faRightFromBracket} />
		</Button>
	);
}
