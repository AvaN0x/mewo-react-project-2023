import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Button({
	component,
	to,
	children,
	className,
	type = "button",
	onClick,
}: {
	component?: any;
	to?: string;
	children?: ReactNode;
	className?: string;
	type?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
	const Component = to ? Link : component ?? "button";

	return (
		<Component
			className={`flex items-center justify-center text-sm text-gray-800 dark:text-gray-200 font-semibold h-8 p-1 rounded-lg dark:hover:bg-slate-600 hover:bg-slate-500 hover:text-primary focus:outline-none focus:ring-slate-400 focus:ring-offset-2 transition-colors ${className}`}
			to={to}
			onClick={onClick}
			type={type}
		>
			{children}
		</Component>
	);
}
