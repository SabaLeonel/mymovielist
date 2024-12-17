import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import { Analytics } from '@vercel/analytics/next';
import { GeistSans } from "geist/font/sans";
import HolyLoader from "holy-loader";
import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: "My Movie List App",
	description: "A simple movie list app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn(
				"min-h-screen font-sans antialiased",
				GeistSans.variable
			)}
			>
				<TRPCReactProvider>
					<HolyLoader color="linear-gradient(to right, #ff0000, #FE2790" height="3px"         speed={500}
 />
					<ThemeProvider attribute="class" defaultTheme="dark">
						<div className="relative flex min-h-screen flex-col bg-[#150002]">{children}</div>
					</ThemeProvider>
					<Analytics />
				</TRPCReactProvider>
			</body>
		</html >
	);
}
