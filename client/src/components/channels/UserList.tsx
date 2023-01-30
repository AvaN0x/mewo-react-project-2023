import Title from "components/Title";
import UserItem from "components/user/UserItem";

export default function UserList({ users }: { users: User[] }) {
	return (
		<nav className="flex flex-col w-56 h-screen bg-slate-300 dark:bg-slate-800 p-4">
			<Title>Users - {users.length}</Title>
			{users.map((u) => (
				<UserItem user={u} key={u.id} className="mb-2" />
			))}
		</nav>
	);
}
