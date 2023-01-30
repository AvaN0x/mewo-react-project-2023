import { faHashtag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import { useChannels } from "components/context/ChannelsProvider";

export default function NavBarChannels() {
	const { channels } = useChannels();

	return (
		<div className="flex flex-col items-start flex-1 w-full p-4 overflow-y-auto">
			<Button
				to="/create"
				className="uppercase block text-gray-800 dark:text-gray-200 text-sm font-bold w-full !justify-start mb-2"
			>
				<FontAwesomeIcon icon={faPlus} className="mr-2" />
				New channel
			</Button>

			{channels === undefined ? (
				<>Loading...</>
			) : channels === null ? (
				<>Impossible to fetch channels</>
			) : (
				channels.map((c) => (
					<Button
						className="h-auto flex-col block text-gray-800 dark:text-gray-200 text-sm font-bold w-full !items-start"
						to={`/channel/${c.id}`}
						key={c.id}
					>
						<span className="lowercase">
							<FontAwesomeIcon
								icon={faHashtag}
								className="mr-2"
							/>
							{c.title}
						</span>
						<span
							className="text-xs ml-4 text-left text"
							style={{
								display: "-webkit-box",
								maxWidth: "200px",
								WebkitLineClamp: "4",
								WebkitBoxOrient: "vertical",
								overflow: "hidden",
							}}
						>
							{c.description}
						</span>
					</Button>
				))
			)}
		</div>
	);
}
