import NavBarUser from "components/layout/navbar/NavBarUser";
import NavBarChannels from "./navbar/NavBarChannels";

export default function NavBar() {
	return (
		<nav className="flex flex-col w-56 h-screen bg-slate-300 dark:bg-slate-800">
			<NavBarChannels />

			<NavBarUser />
		</nav>
	);
}
