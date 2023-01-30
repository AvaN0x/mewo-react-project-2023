import Header from "components/Header";
import UserDetailedData from "components/user/UserDetailedData";
import Title from "components/Title";
import LogoutButton from "components/LogoutButton";
import Separator from "components/Separator";
import ThemeButton from "components/ThemeButton";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditPassword from "components/user/edit/EditPassword";
import EditUserData from "components/user/edit/EditUserData";

export default function Edit() {
	return (
		<div className="p-4">
			<Header>User edit</Header>

			<Title>My account</Title>
			<UserDetailedData />

			<Separator />
			<Title className="mt-4">Change user data</Title>
			<EditUserData />

			<Separator />
			<Title className="mt-4">Change user password</Title>
			<EditPassword />

			<Separator />
			<ThemeButton>
				<span className="ml-2">Toggle night/light theme</span>
			</ThemeButton>
			<LogoutButton className="text-red-500">
				<FontAwesomeIcon icon={faRightFromBracket} />
				<span className="ml-2">Log Out</span>
			</LogoutButton>
		</div>
	);
}
