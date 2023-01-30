import { create } from "api/channels";
import { getAll } from "api/users";
import { useAuth } from "components/context/AuthProvider";
import { useChannels } from "components/context/ChannelsProvider";
import Input from "components/form/Input";
import Header from "components/Header";
import Title from "components/Title";
import UserItem from "components/user/UserItem";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateChannel() {
	const { user } = useAuth();
	const { add: addChannel } = useChannels() as Required<ChannelsContext>;
	const navigate = useNavigate();
	const [users, setUsers] = useState<User[] | null | undefined>(undefined);

	const [userIds, setUserIds] = useState<User["id"][]>(() => []);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		(async () => {
			try {
				const newUsers = await getAll();
				setUsers(newUsers.filter((u) => u.id !== user?.id));
			} catch (error) {
				setUsers(null);
			}
		})();
	}, []);

	const toggleUserId = (id: User["id"]) => {
		let ids = [...userIds];
		if (ids.includes(id)) {
			ids = ids.filter((value) => value !== id);
		} else {
			ids.push(id);
		}
		setUserIds(ids);
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setError(undefined);
		try {
			const channel = await create({
				title,
				description,
				userIds,
			});

			addChannel(channel);
			// navigate(`/channel/${channel.id}`);
		} catch (error) {
			console.error(error);
			setError((error as Error).message);
		}
	};

	return (
		<>
			<Header>Create a new channel</Header>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					label="Title"
					required
				/>
				<Input
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					label="Description"
					required
				/>

				<Title>
					Select users<span className="text-red-500">*</span>
				</Title>
				<div className="mb-4 max-h-[40vh] overflow-y-auto">
					{users === undefined ? (
						<>Loading...</>
					) : users === null ? (
						<>No user data found</>
					) : (
						users.map((u) => (
							<div key={u.id} className="mb-1">
								<input
									type="checkbox"
									id={`userId-${u.id}`}
									name="userIds"
									value={u.id}
									onChange={(event) => toggleUserId(u.id)}
									className="hidden"
								/>

								<label htmlFor={`userId-${u.id}`}>
									<UserItem
										user={u}
										className={`border ${
											userIds.includes(u.id)
												? "border-primary"
												: "border-transparent"
										}`}
									/>
								</label>
							</div>
						))
					)}
				</div>

				{error && <span className="text-red-600">{error}</span>}
				<button
					type="submit"
					className="block bg-primary w-full rounded-sm py-1 font-light hover:font-normal transition-all hover:opacity-90"
				>
					Create channel
				</button>
			</form>
		</>
	);
}
