import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const fetchProfile = async () => {
	const { userId } = await auth();
	if (!userId) {
		return { status: 500 };
	}
	const profileData = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});
	return { profileData };
};
