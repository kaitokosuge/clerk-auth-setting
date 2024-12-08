import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
} from "@clerk/nextjs";
import "./globals.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="ja">
				<body>
					<SignedOut>
						Fruitsbase
						<SignInButton />
					</SignedOut>
					<SignedIn>Fruitsbase</SignedIn>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
