import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { useAuth } from "components/context/AuthProvider";
import LogoutButton from "components/LogoutButton";
import ThemeButton from "components/ThemeButton";

export default function UserData() {
	const { user } = useAuth();

	return (
		<div className="flex w-full h-14 items-center bg-slate-400 dark:bg-slate-900 p-2">
			<Button className="flex !justify-start flex-1 overflow-hidden">
				<div className="flex flex-col items-center justify-center w-7 h-7 min-w-[1.75rem] rounded-full mr-1 border">
					<img
						src={import.meta.env.VITE_DEFAULT_AVATAR_URL}
						alt="avatar"
						className="w-7 h-7 rounded-full"
					/>
				</div>
				<p className="text-center text-ellipsis whitespace-nowrap overflow-hidden">
					{user?.name}
				</p>
			</Button>

			<ThemeButton className="min-w-[1.5rem]" />
			<Button className="min-w-[1.5rem] ml-1">
				<FontAwesomeIcon icon={faUserPen} />
			</Button>
			<LogoutButton className="min-w-[1.5rem] ml-1" />
		</div>
	);
}
