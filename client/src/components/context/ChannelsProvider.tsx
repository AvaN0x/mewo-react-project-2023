import { getAll } from "api/channels";
import { createContext, useContext, useEffect, useState } from "react";

const ChannelsContext = createContext<ChannelsContext>({ channels: [] });
export const useChannels = () => useContext(ChannelsContext);

export default function ChannelsProvider({
	children,
}: {
	children?: JSX.Element;
}) {
	const [channels, setChannels] = useState<ChannelsContext["channels"]>();

	useEffect(() => {
		(async () => {
			try {
				setChannels(await getAll());
			} catch (error) {
				setChannels(null);
			}
		})();
	}, []);

	const changeChannels = (channel: Channel) => {
		setChannels([...(channels ?? []), channel]);
	};
	return (
		<ChannelsContext.Provider value={{ channels, add: changeChannels }}>
			{children}
		</ChannelsContext.Provider>
	);
}
