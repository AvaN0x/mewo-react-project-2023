import ThemeButton from "../ThemeButton";

export default function Header() {
	return (
		<header className="flex fixed top-0 left-0 right-0 h-12 w-screen bg-primary">
			top bar
			<ThemeButton />
		</header>
	);
}
