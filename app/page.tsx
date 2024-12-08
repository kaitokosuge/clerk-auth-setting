import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	console.log("userです", user);

	return (
		<div className="">
			{user?.fullName}
			<br />
			{user?.id}
			<div></div>
		</div>
	);
}
