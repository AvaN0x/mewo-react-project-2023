import { ReactNode } from "react";

export default function Panel({ children }: { children?: ReactNode }) {
	return (
		<div className="flex flex-col w-full items-start bg-slate-300 dark:bg-slate-800 p-2 rounded-md">
			{children}
		</div>
	);
}
