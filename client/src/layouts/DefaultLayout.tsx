import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Header from "../components/layout/Header";
import { useAuth } from "../components/context/AuthProvider";

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
		<>
			<Header />
			<NavBar />

			<main className="mt-12 ml-32 font-roboto">
				<Outlet />
			</main>
		</>
	);
}
