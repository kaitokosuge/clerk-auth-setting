import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import { fetchProfile } from "./fetchProfile";

export default async function page() {
	const { userId, redirectToSignIn } = await auth();
	if (!userId) {
		return redirectToSignIn();
	}
	const user = await currentUser();
	if (!user) {
		return redirectToSignIn();
	}
	const { profileData } = await fetchProfile();
	return (
		<div>
			<p>hello self</p>
			{profileData?.email}
		</div>
	);
}
