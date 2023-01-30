import { get, getComments } from "api/channels";
import CommentInput from "components/channels/CommentInput";
import Comment from "components/channels/Comment";
import DetailBar from "components/channels/DetailBar";
import UserList from "components/channels/UserList";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "components/Header";

export default function ChannelIdPage() {
	const { id } = useParams();
	const commentsContainer = useRef<HTMLDivElement>(null);

	const [channel, setChannel] = useState<Channel | undefined | null>(
		undefined
	);
	const [comments, setComments] = useState<
		ChannelComment[] | undefined | null
	>(undefined);

	const updateComments = (newComments: typeof comments) => {
		setComments(newComments);

		// Scroll to bottom
		setTimeout(() => {
			commentsContainer.current!.scrollTop =
				commentsContainer.current!.scrollHeight;
		}, 0);
	};

	useEffect(() => {
		setChannel(undefined);
		setComments(undefined);
		(async () => {
			try {
				setChannel(await get(id!));
				updateComments(await getComments(id!));
			} catch (error) {
				setChannel(null);
				setComments(null);
			}
		})();
	}, [id]);

	const handleAddComment = (comment: ChannelComment) => {
		updateComments([...(comments || []), comment]);
	};

	return (
		<>
			{channel === undefined ? (
				<Header className="mt-2">Loading...</Header>
			) : channel === null ? (
				<Header className="mt-2">Impossible to find channel</Header>
			) : (
				<div className="flex max-h-full">
					<div className="flex-1 overflow-hidden flex flex-col">
						<DetailBar channel={channel} />
						<div
							className="flex-1 overflow-y-auto py-4 w-full"
							ref={commentsContainer}
						>
							{comments === undefined ? (
								<Header className="mt-2">
									Loading comments...
								</Header>
							) : (
								comments?.map((c) => (
									<Comment comment={c} key={c.id} />
								))
							)}
						</div>
						<CommentInput
							channelId={channel.id}
							onAdd={handleAddComment}
						/>
					</div>
					<UserList users={channel.users} />
				</div>
			)}
		</>
	);
}
