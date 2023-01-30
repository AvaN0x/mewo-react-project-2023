import { POST } from "api";

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
