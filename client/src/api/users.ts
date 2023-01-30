import { GET } from "api";

export const getAll = async (): Promise<User[]> => {
	return await GET("/users");
};
