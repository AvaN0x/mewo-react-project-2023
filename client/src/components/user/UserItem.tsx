import Button from "components/Button";
import UserAvatar from "components/user/UserAvatar";

export default function UserItem({
	user,
	to,
	onClick,
}: {
	user: User;
	to?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
	return (
		<Button
			className="flex !justify-start flex-1 overflow-hidden"
			to={to}
			onClick={onClick}
		>
			<UserAvatar user={user} />
			<p className="text-center text-ellipsis whitespace-nowrap overflow-hidden">
				{user?.name}
			</p>
		</Button>
	);
}
