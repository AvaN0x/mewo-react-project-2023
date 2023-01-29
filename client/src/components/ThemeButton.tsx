import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./context/ThemeProvider";
import Button from "./Button";

export default function ThemeButton({ className }: { className?: string }) {
	const { theme, change } = useTheme();

	const handleClick = () => {
		// Change should always be defined at this point
		if (change) {
			change(theme === "dark" ? "light" : "dark");
		}
	};

	return (
		<Button className={className} onClick={handleClick}>
			{theme === "dark" && <FontAwesomeIcon icon={faMoon} />}
			{theme === "light" && <FontAwesomeIcon icon={faSun} />}
		</Button>
	);
}
