import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./context/ThemeProvider";

export default function ThemeButton({ className }: { className?: string }) {
	const { theme, change } = useContext(ThemeContext);

	const handleClick = () => {
		// Change should always be defined at this point
		if (change) {
			change(theme === "dark" ? "light" : "dark");
		}
	};

	return (
		<button className={className} onClick={handleClick}>
			{theme === "dark" && <FontAwesomeIcon icon={faMoon} />}
			{theme === "light" && <FontAwesomeIcon icon={faSun} />}
		</button>
	);
}
