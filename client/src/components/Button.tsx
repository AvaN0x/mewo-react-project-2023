import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Button({
	component,
	to,
	children,
	className,
	onClick,
}: {
	component?: any;
	to?: string;
	children?: ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
	const Component = to ? Link : component ?? "button";

	// Render link if `to` prop is defined
	return (
		<Component
			className={`flex items-center justify-center text-sm text-white font-semibold h-8 p-1 rounded-lg dark:hover:bg-slate-600 hover:bg-slate-500 hover:text-primary focus:outline-none focus:ring-slate-400 focus:ring-offset-2 transition-colors ${className}`}
			to={to}
			onClick={onClick}
			type="button"
		>
			{children}
		</Component>
	);
}
