import { faHashtag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { useChannels } from "components/context/ChannelsProvider";

export default function NavBarChannels() {
	const { channels } = useChannels();

	return (
		<div className="flex flex-col items-start flex-1 w-full p-4">
			<Button
				to="/create"
				className="uppercase block text-gray-800 dark:text-gray-200 text-sm font-bold w-full !justify-start mb-2"
			>
				<FontAwesomeIcon icon={faPlus} className="mr-2" />
				New channel
			</Button>
			<Button className="h-auto flex-col block text-gray-800 dark:text-gray-200 text-sm font-bold w-full !items-start">
				<span className="lowercase">
					<FontAwesomeIcon icon={faHashtag} className="mr-2" />
					general
				</span>
				<span className="text-xs ml-4 text-left text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nam, quos.
				</span>
			</Button>

			<pre>{JSON.stringify(channels, null, 2)}</pre>
		</div>
	);
}
