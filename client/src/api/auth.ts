import { GET, POST } from ".";

export const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<SessionData> => {
	return await POST("/auth/login", {
		email,
		password,
	});
};

export const register = async ({
	name,
	email,
	password,
}: {
	name: string;
	email: string;
	password: string;
}): Promise<SessionData> => {
	return await POST("/auth/register", {
		name,
		email,
		password,
	});
};

export const logout = async (refreshToken: string): Promise<void> => {
	return await POST("/auth/logout", {
		refreshToken: refreshToken,
	});
};

export const getCurrentUser = async (): Promise<User> => {
	return await GET("/auth/user");
};
