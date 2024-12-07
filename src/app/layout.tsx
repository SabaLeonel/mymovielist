import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next";
import HolyLoader from "holy-loader";

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
				"min-h-screen bg-background font-sans antialiased",
				GeistSans.variable
			)}
			>
				<TRPCReactProvider>
					<HolyLoader color="#ff0000" />
					<ThemeProvider attribute="class" defaultTheme="dark">
						<div className="relative flex min-h-screen flex-col dark:bg-[#150002]">{children}</div>
					</ThemeProvider>
					<Analytics />
				</TRPCReactProvider>
			</body>
		</html >
	);
}
