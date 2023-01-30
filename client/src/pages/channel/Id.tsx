import { get, getComments } from "api/channels";
import CommentInput from "components/channels/CommentInput";
import CreateChannel from "components/channels/CreateChannel";
import DetailBar from "components/channels/DetailBar";
import UserList from "components/channels/UserList";
import { useChannels } from "components/context/ChannelsProvider";
import Header from "components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
				<>Loading...</>
			) : channel === null ? (
				<>Impossible to find channel</>
			) : (
				<div className="flex max-h-full">
					<div className="flex-1 overflow-hidden flex flex-col">
						<DetailBar channel={channel} />
						<div className="flex-1 overflow-y-auto p-4">
							{/* <pre>{JSON.stringify(channel, null, 2)}</pre> */}
							<pre>{JSON.stringify(comments, null, 2)}</pre>
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
