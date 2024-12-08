"use client";
import React from "react";

export default function DeleteUser({ deleteUser }: { deleteUser: any }) {
	return (
		<div>
			<div onClick={deleteUser}>削除</div>
		</div>
	);
}
