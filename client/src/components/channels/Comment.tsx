import UserAvatar from "components/user/UserAvatar";

export default function Comment({ comment }: { comment: ChannelComment }) {
	return (
		<div className="my-2 flex px-4 hover:bg-slate-900/10 dark:hover:bg-slate-50/10">
			<div className="mt-2 mr-2">
				<UserAvatar user={comment.user} />
			</div>
			<div className="flex flex-col">
				<span className="font-bold">{comment.user.name}</span>
				<span>{comment.content}</span>
			</div>
		</div>
	);
}
