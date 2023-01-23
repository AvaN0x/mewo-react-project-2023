import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../../api/auth";

const AuthContext = createContext<AuthContext>({});
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children?: JSX.Element }) {
	const [mounted, setMounted] = useState(false);
	const [sessionData, setSessionData] = useState<
		Omit<AuthContext, "setData"> | undefined
	>();

	const changeData = (
		data?: Required<Omit<AuthContext, "setData">> | undefined
	) => {
		if (data) {
			localStorage.setItem("access_token", data.accessToken);
			localStorage.setItem("refresh_token", data.refreshToken);
		} else {
			localStorage.removeItem("access_token");
			localStorage.removeItem("refresh_token");
		}
		setSessionData(data);
	};

	useEffect(() => {
		(async () => {
			try {
				const accessToken = localStorage.getItem("access_token");
				const refreshToken = localStorage.getItem("refresh_token");
				if (accessToken && refreshToken) {
					const data = {
						accessToken,
						refreshToken,
						user: await getCurrentUser(),
					};

					setSessionData(data);
				}
			} catch (error) {
			} finally {
				setMounted(true);
			}
		})();
	}, []);

	if (!mounted) {
		// TODO:
		return <div>Loading...</div>;
	}

	return (
		<AuthContext.Provider value={{ ...sessionData, setData: changeData }}>
			{children}
		</AuthContext.Provider>
	);
}
