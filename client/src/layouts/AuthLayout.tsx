import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<main className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 h-screen justify-center font-roboto">
			<div className="rounded-lg bg-slate-300 dark:bg-slate-900 p-8 shadow-2xl min-w-[400px]">
				<Outlet />
			</div>
		</main>
	);
}
