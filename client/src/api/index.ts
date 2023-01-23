export const GET = async <T>(route: string): Promise<T> => {
	const accessToken = localStorage.getItem("access_token");

	const result = await (
		await fetch(import.meta.env.VITE_API_URL + route, {
			headers: new Headers({
				Authorization: "Bearer " + accessToken,
			}),
		})
	).json();

	return result;
};

export const POST = async <T>(route: string, body: any): Promise<T> => {
	const accessToken = localStorage.getItem("access_token");

	const response = await fetch(import.meta.env.VITE_API_URL + route, {
		method: "post",
		headers: new Headers({
			Authorization: "Bearer " + accessToken,
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	});

	if (!response.ok || response.status >= 400) {
		throw new Error(
			(await response.json()).message ?? "Une erreur est survenue."
		);
	}

	return await response.json();
};
