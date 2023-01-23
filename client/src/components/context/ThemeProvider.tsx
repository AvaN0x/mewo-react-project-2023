import { createContext, useState } from "react";

export const ThemeContext = createContext<ThemeContext>({ theme: "dark" });

export default function Header({ children }: { children?: JSX.Element }) {
	const [theme, setTheme] = useState<Theme>("dark");

	const changeTheme = (newTheme: Theme) => {
		console.log("save changed to", newTheme);

		setTheme(newTheme);
	};
	return (
		<ThemeContext.Provider value={{ theme, change: changeTheme }}>
			<div className={`${theme}`}>{children}</div>
		</ThemeContext.Provider>
	);
}
