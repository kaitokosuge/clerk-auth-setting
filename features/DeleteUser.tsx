"use client";
import { deleteUser } from "@/app/Func/DeleteUser";
import React from "react";

export default function DeleteUser({ userId }: { userId: string }) {
	const handleDelete = async (userId: string) => {
		try {
			await deleteUser(userId); // Server Action を呼び出し
			alert("User deleted successfully");
		} catch (error) {
			console.error("Failed to delete user:", error);
		}
	};
	return (
		<div>
			<div onClick={() => handleDelete(userId)}>削除</div>
		</div>
	);
}
