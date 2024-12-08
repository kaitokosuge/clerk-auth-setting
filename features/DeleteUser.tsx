import { clerkClient } from "@clerk/nextjs/server";
import React from "react";

export default function DeleteUser({ user }: { user: any }) {
	const deleteUser = async () => {
		const client = await clerkClient();
		if (user === null) {
			return;
		}
		await client.users.deleteUser(user.id);
	};
	return (
		<div>
			<div onClick={deleteUser}>削除</div>
		</div>
	);
}
