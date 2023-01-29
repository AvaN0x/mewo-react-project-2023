import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/context/AuthProvider";
import { logout } from "api/auth";
import Button from "components/Button";
import { ReactNode } from "react";

export default function LogoutButton({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) {
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
			{children ?? <FontAwesomeIcon icon={faRightFromBracket} />}
		</Button>
	);
}
