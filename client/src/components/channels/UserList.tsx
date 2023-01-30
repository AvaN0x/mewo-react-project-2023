import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import Title from "components/Title";
import UserItem from "components/user/UserItem";
import { useState } from "react";

export default function UserList({ users }: { users: User[] }) {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<nav
				className={`flex flex-col w-56 h-screen bg-slate-300 dark:bg-slate-800 p-4 ${
					!visible && "max-md:hidden"
				}`}
			>
				<Title>Users - {users.length}</Title>
				{users.map((u) => (
					<UserItem user={u} key={u.id} className="mb-2" />
				))}
			</nav>
			<Button
				className={`md:hidden absolute top-16 ${
					visible ? "right-60" : "right-4"
				} bg-slate-500 !aspect-square !w-10 !h-10 !text-white !rounded-full shadow-2xl hover:scale-105 transition-transform z-[1]`}
				onClick={() => setVisible(!visible)}
			>
				<FontAwesomeIcon icon={faUsers} />
			</Button>
		</>
	);
}
