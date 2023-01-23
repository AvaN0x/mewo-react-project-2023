import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Header from "../components/layout/Header";

export default function DefaultLayout() {
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
