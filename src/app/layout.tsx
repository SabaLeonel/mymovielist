import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {Header} from "~/components/header";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "My Movie List App",
	description: "A simple movie list app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body className="bg-[#150002]">
				<Header />
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}
