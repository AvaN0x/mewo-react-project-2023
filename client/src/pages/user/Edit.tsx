import Header from "components/Header";
import UserDetailedData from "components/user/UserDetailedData";
import Title from "components/Title";
import LogoutButton from "components/LogoutButton";
import Separator from "components/Separator";
import ThemeButton from "components/ThemeButton";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Edit() {
	return (
		<>
			<Header>User edit</Header>

			<Title>My account</Title>
			<UserDetailedData />

			<Separator />
			<Title className="mt-4">Change user password</Title>
			<p>TODO</p>

			<Separator />
			<ThemeButton>
				<span className="ml-2">Toggle night/light theme</span>
			</ThemeButton>
			<LogoutButton className="text-red-500">
				<FontAwesomeIcon icon={faRightFromBracket} />
				<span className="ml-2">Log Out</span>
			</LogoutButton>
		</>
	);
}
