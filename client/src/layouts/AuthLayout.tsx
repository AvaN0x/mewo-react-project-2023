import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthProvider";
import ThemeButton from "../components/ThemeButton";

export default function DefaultLayout() {
	const { user } = useAuth();
	const navigate = useNavigate();

	// User is currently logged in, redirect to home page
	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

	return (
		<main className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 h-screen justify-center font-roboto">
			<div className="absolute top-6 right-6 bg-slate-600 aspect-square w-10 h-10 flex flex-col justify-center text-white rounded-full shadow-2xl hover:scale-105 transition-transform">
				<ThemeButton className="h-full w-full" />
			</div>

			<div className="w-full max-w-[450px]">
				<div className="rounded-lg bg-slate-300 dark:bg-slate-900 p-8 shadow-2xl mx-4">
					<Outlet />
				</div>
			</div>
		</main>
	);
}
