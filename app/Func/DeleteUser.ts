"use server";
import { clerkClient } from "@clerk/nextjs/server";

export const deleteUser = async (userId: string) => {
	const client = await clerkClient();
	await client.users.deleteUser(userId);
};
