type SessionData = {
	user: User;
	tokens: Tokens;
};

type User = {
	id: string;
	email: string;
	name: string;
	role: string;
};

type Tokens = {
	access: TokensData;
	refresh: TokensData;
};

type TokensData = {
	token: string;
	expires: Date;
};

type Channel = {
	id: string;
	title: string;
	description: string;
	users: User[];
};

type Comment = {
	id: string;
	content: string;
	user: User;
};
