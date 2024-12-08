import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
	<>
		hello profilee
		<UserProfile
			path="/user-profile"
			appearance={{
				elements: {
					formButtonPrimary: "your-org-button org-red-button",
				},
			}}
		/>
	</>
);

export default UserProfilePage;
