import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { useAuth } from "components/context/AuthProvider";
import LogoutButton from "components/LogoutButton";
import ThemeButton from "components/ThemeButton";
import Title from "components/Title";
import Panel from "components/Panel";
import UserAvatar from "components/user/UserAvatar";

export default function UserDetailedData() {
	const { user } = useAuth() as Required<AuthContext>;

	return (
		<Panel>
			<UserAvatar user={user} />
			<Title className="mt-4">Username</Title>
			<p className="ml-2">{user.name}</p>
			<Title className="mt-4">E-mail</Title>
			<p className="ml-2">{user.email}</p>
		</Panel>
	);
}
