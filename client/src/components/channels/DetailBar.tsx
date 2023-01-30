import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailBar({ channel }: { channel: Channel }) {
	return (
		<div className="flex w-full h-12 bg-slate-300/80 dark:bg-slate-800/80 px-4 items-center">
			<span className="lowercase font-bold whitespace-nowrap ">
				<FontAwesomeIcon icon={faHashtag} className="mr-2" />
				{channel.title}
			</span>
			<div className="block relative border-l border-current h-4 w-0 mx-4"></div>
			<span
				className="text-ellipsis whitespace-nowrap overflow-hidden"
				title={channel.description}
			>
				{channel.description}
			</span>
		</div>
	);
}
