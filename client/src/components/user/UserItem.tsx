import Button from "components/Button";
import UserAvatar from "components/user/UserAvatar";

export default function UserItem({
	user,
	className,
	to,
	onClick,
}: {
	user: User;
	className?: string;
	to?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) {
	return (
		<Button
			className={`flex !justify-start flex-1 overflow-hidden ${className}`}
			to={to}
			onClick={onClick}
			component="div"
		>
			<UserAvatar user={user} />
			<p className="text-center text-ellipsis whitespace-nowrap overflow-hidden">
				{user?.name}
			</p>
		</Button>
	);
}
