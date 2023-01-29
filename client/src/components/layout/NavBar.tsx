import UserData from "./navbar/UserData";
import LogoutButton from "components/LogoutButton";

export default function NavBar() {
	return (
		<nav className="flex flex-col w-56 h-screen bg-slate-300 dark:bg-slate-800">
			<div className="flex flex-col items-start flex-1 w-full ">
				<LogoutButton />
			</div>

			<UserData />
		</nav>
	);
}
