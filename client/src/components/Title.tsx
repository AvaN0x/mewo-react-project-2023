import { ReactNode } from "react";

export default function Title({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) {
	return (
		<label
			className={`block text-gray-800 dark:text-gray-200 text-sm font-bold mb-2 uppercase ${className}`}
		>
			{children}
		</label>
	);
}
