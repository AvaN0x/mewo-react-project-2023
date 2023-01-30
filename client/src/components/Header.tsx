import { ReactNode } from "react";

export default function Header({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<h1
			className={`text-center text-gray-900 text-xl pb-3 dark:text-white ${className}`}
		>
			{children}
		</h1>
	);
}
