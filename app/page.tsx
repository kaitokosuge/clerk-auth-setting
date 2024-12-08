import { clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	console.log("userです", user);
	const deleteUser = async () => {
		const client = await clerkClient();
		if (user === null) {
			return;
		}
		await client.users.deleteUser(user.id);
	};
	return (
		<div className="">
			{user?.fullName}
			<br />
			{user?.id}
			<div></div>
			<div onClick={deleteUser}>削除</div>
		</div>
	);
}
