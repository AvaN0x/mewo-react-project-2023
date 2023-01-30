import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "components/context/AuthProvider";
import ThemeProvider from "components/context/ThemeProvider";
import AuthLayout from "layouts/AuthLayout";
import DefaultLayout from "layouts/DefaultLayout";
import App from "pages/App";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import ErrorPage from "pages/error";
import "index.css";
import UserEdit from "pages/user/Edit";
import CreateChannel from "components/channels/CreateChannel";

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
			{
				path: "/user/edit",
				element: <UserEdit />,
			},
			{
				path: "/create/",
				element: <CreateChannel />,
			},
			// {
			// 	path: "/channels/:id",
			// },
		],
	},
	{
		path: "/auth/",
		element: <AuthLayout />,
		children: [
			{
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/auth/register",
				element: <Register />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);
