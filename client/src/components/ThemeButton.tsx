import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "components/context/ThemeProvider";
import Button from "components/Button";
import { ReactNode } from "react";

export default function ThemeButton({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) {
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
			{children}
		</Button>
	);
}
