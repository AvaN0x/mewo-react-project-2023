import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import DefaultLayout from "./layouts/DefaultLayout";
import Login, { action as loginAction } from "./pages/auth/Login";
import Register, { action as registerAction } from "./pages/auth/Register";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
	{
		path: "/auth/",
		element: <AuthLayout />,
		children: [
			{
				path: "/auth/login",
				element: <Login />,
				action: loginAction,
			},
			{
				path: "/auth/register",
				element: <Register />,
				action: registerAction,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
