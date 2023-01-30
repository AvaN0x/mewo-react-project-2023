import NavBarChannels from "components/layout/navbar/NavBarChannels";
import NavBarUser from "components/layout/navbar/NavBarUser";

export default function NavBar() {
	return (
		<nav className="flex flex-col w-56 h-screen bg-slate-300 dark:bg-slate-800">
			<NavBarChannels />

			<NavBarUser />
		</nav>
	);
}
