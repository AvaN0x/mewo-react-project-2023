import { ReactNode } from "react";

export default function Button({
	children,
	className,
	onClick,
}: {
	children: ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<button
			className={`flex items-center justify-center text-sm text-white font-semibold h-8 p-1 rounded-lg dark:hover:bg-slate-600 hover:bg-slate-500 hover:text-primary focus:outline-none focus:ring-slate-400 focus:ring-offset-2 transition-colors ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
