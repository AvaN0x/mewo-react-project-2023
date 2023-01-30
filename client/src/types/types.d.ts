type Theme = "dark" | "light";

type ThemeContext = {
	theme: Theme;
	change?: (theme: Theme) => void;
};

type AuthContext = {
	user?: User;
	accessToken?: string;
	refreshToken?: string;
	setData?: (sessionData?: Required<Omit<AuthContext, "setData">>) => void;
};

type ChannelsContext = {
	channels?: Channel[] | null;
	add?: (channel: Channel) => void;
};
