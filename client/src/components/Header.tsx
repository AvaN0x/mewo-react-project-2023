import { ReactNode } from "react";

export default function Header({ children }: { children?: ReactNode }) {
	return (
		<h1 className="text-center text-gray-900 text-xl pb-3 dark:text-white">
			{children}
		</h1>
	);
}
