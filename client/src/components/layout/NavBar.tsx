import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import NavBarChannels from "components/layout/navbar/NavBarChannels";
import NavBarUser from "components/layout/navbar/NavBarUser";
import { useState } from "react";

export default function NavBar() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<nav
				className={`flex flex-col w-56 h-screen bg-slate-300 dark:bg-slate-800 ${
					!visible && "max-sm:hidden"
				}`}
			>
				<NavBarChannels />

				<NavBarUser />
			</nav>
			<Button
				className={`sm:hidden absolute top-16 ${
					visible ? "left-60" : "left-4"
				} bg-slate-500 !aspect-square !w-10 !h-10 !text-white !rounded-full shadow-2xl hover:scale-105 transition-transform z-[1]`}
				onClick={() => setVisible(!visible)}
			>
				<FontAwesomeIcon icon={faBars} />
			</Button>
		</>
	);
}
