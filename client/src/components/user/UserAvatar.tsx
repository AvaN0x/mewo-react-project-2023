export default function UserAvatar({ user }: { user: User }) {
	return (
		<div className="flex flex-col items-center justify-center w-7 h-7 min-w-[1.75rem] rounded-full mr-1 border">
			<img
				// src={import.meta.env.VITE_DEFAULT_AVATAR_URL}
				src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${user.id}`}
				alt="avatar"
				className="w-7 h-7 rounded-full"
			/>
		</div>
	);
}
