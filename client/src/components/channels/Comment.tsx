import UserAvatar from "components/user/UserAvatar";

export default function Comment({ comment }: { comment: ChannelComment }) {
	return (
		<div className="my-2 flex px-4 hover:bg-slate-900/10 dark:hover:bg-slate-50/10 relative max-w-full overflow-x-hidden">
			<div className="mt-2 mr-2">
				<UserAvatar user={comment.user} />
			</div>
			<div
				className="flex flex-col"
				style={{ maxWidth: "calc(100% - 2rem)" }}
			>
				<span className="font-bold">{comment.user.name}</span>
				<span className="break-words">{comment.content}</span>
			</div>
		</div>
	);
}
