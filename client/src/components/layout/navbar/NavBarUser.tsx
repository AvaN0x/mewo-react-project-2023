import { useAuth } from "components/context/AuthProvider";
import LogoutButton from "components/LogoutButton";
import ThemeButton from "components/ThemeButton";
import UserItem from "components/user/UserItem";

export default function NavBarUser() {
	const { user } = useAuth() as Required<AuthContext>;

	return (
		<div className="flex w-full h-14 items-center bg-slate-400 dark:bg-slate-900 p-2">
			<UserItem user={user} to="/user/edit" />

			<ThemeButton className="min-w-[1.5rem]" />
			<LogoutButton className="min-w-[1.5rem] ml-1" />
		</div>
	);
}
