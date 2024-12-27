import { ThemeProvider } from "next-themes";
import { TRPCReactProvider } from "@/trpc/react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: {
	children: React.ReactNode
}) {
	return (
		<SessionProvider>
			<TRPCReactProvider>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</TRPCReactProvider>
		</SessionProvider>
	)

}