import { GET, PATCH, POST } from "api";

export const login = async ({
	email,
	password,
}: {
	email: User["email"];
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
	name: User["name"];
	email: User["email"];
	password: string;
}): Promise<SessionData> => {
	return await POST("/auth/register", {
		name,
		email,
		password,
	});
};

export const patchUser = async ({
	userId,
	name,
	email,
	password,
}: {
	userId: User["id"];
	name?: User["name"];
	email?: User["email"];
	password?: string;
}): Promise<User> => {
	return await PATCH(`/users/${userId}`, {
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
