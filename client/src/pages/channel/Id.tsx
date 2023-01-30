import { get, getComments } from "api/channels";
import CommentInput from "components/channels/CommentInput";
import Comment from "components/channels/Comment";
import DetailBar from "components/channels/DetailBar";
import UserList from "components/channels/UserList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "components/Header";

export default function ChannelIdPage() {
	const { id } = useParams();

	const [channel, setChannel] = useState<Channel | undefined | null>(
		undefined
	);
	const [comments, setComments] = useState<
		ChannelComment[] | undefined | null
	>(undefined);

	useEffect(() => {
		setChannel(undefined);
		setComments(undefined);
		(async () => {
			try {
				setChannel(await get(id!));
				setComments(await getComments(id!));
			} catch (error) {
				setChannel(null);
				setComments(null);
			}
		})();
	}, [id]);

	const handleAddComment = (comment: ChannelComment) => {
		setComments([...(comments || []), comment]);
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
						<div className="flex-1 overflow-y-auto py-4 w-full">
							{comments?.map((c) => (
								<Comment comment={c} key={c.id} />
							))}
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
