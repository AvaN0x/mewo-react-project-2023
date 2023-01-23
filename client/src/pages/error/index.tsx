import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<main className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 h-screen justify-center font-roboto">
			<div className="rounded-lg bg-slate-300 dark:bg-slate-900 text-gray-800 dark:text-gray-200 p-8 shadow-2xl min-w-[400px] text-center">
				<h1 className="text-9xl">404</h1>
				<h2 className="text-4xl mt-[-1rem]">Page not found</h2>
				<p className="pt-4">
					<Link to="/" className="text-primary text-md">
						Home page
					</Link>
				</p>
			</div>
		</main>
	);
}
