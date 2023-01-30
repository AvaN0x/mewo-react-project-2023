import { GET, POST } from "api";

export const create = async ({
	title,
	description,
	userIds,
}: {
	title: Channel["title"];
	description: Channel["description"];
	userIds: User["id"][];
}): Promise<Channel> => {
	return await POST("/discussions", {
		title,
		description,
		userIds,
	});
};

export const get = async (id: string): Promise<Channel> => {
	return await GET(`/discussions/${id}`);
};

export const getComments = async (id: string): Promise<Comment[]> => {
	return await GET(`/discussions/${id}/comments`);
};

export const getAll = async (): Promise<Channel[]> => {
	return await GET("/discussions");
};
