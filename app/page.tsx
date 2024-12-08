import DeleteUser from "@/features/DeleteUser";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	if (user === null) {
		return;
	}
	return (
		<div className="">
			<div></div>
			<DeleteUser userId={user.id} />
		</div>
	);
}
