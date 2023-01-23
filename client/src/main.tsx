import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import DefaultLayout from "./layouts/DefaultLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AuthLayout from "./layouts/AuthLayout";
import ThemeProvider from "./components/context/ThemeProvider";
import AuthProvider from "./components/context/AuthProvider";

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
