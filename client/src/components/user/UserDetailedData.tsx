import { useAuth } from "components/context/AuthProvider";
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
