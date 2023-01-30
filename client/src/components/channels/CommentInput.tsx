import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addComment } from "api/channels";
import Button from "components/Button";
import Input from "components/form/Input";
import { FormEvent, useState } from "react";

export default function CommentInput({
	channelId,
	onAdd,
}: {
	channelId: string;
	onAdd?: (comment: ChannelComment) => void;
}) {
	const [content, setContent] = useState("");

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (content.trim() === "") return;

		const comment = await addComment({ channelId, content });
		onAdd?.(comment);
		setContent("");
	};

	return (
		<div className="mx-4">
			<form onSubmit={handleSubmit} className="relative">
				<Input
					type="text"
					name="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Send a message"
					required
					className="bg-gray-300 border-gray-300"
				/>
				<Button type="submit" className="absolute right-1 top-1 w-8">
					<FontAwesomeIcon icon={faPaperPlane} />
				</Button>
			</form>
		</div>
	);
}
