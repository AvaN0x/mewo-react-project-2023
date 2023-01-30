import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import { useAuth } from "../components/context/AuthProvider";
import ChannelsProvider from "components/context/ChannelsProvider";

export default function DefaultLayout() {
	const { user } = useAuth();
	const navigate = useNavigate();

	// User is currently logged out, redirect to login page
	useEffect(() => {
		if (!user) {
			navigate("/auth/login");
		}
	}, [user]);

	return (
		<ChannelsProvider>
			<div className="flex h-screen bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200">
				<NavBar />

				<main className="font-roboto flex-1 overflow-auto">
					<Outlet />
				</main>
			</div>
		</ChannelsProvider>
	);
}
