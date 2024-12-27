import { db } from "@/server/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FortyTwoProvider from "next-auth/providers/42-school";

import Mailgun from "next-auth/providers/mailgun";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
			// ...other properties
			// role: UserRole;
		} & DefaultSession["user"];
	}

	// interface User {
	//   // ...other properties
	//   // role: UserRole;
	// }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
	providers: [
		FortyTwoProvider({
			clientId: process.env.FORTY_TWO_CLIENT_ID,
			clientSecret: process.env.FORTY_TWO_CLIENT_SECRET
		  }),
		GoogleProvider,
		Mailgun({ 
			from: process.env.EMAIL_FROM,
			apiKey: process.env.AUTH_MAILGUN_KEY,
		 }),
	],
	adapter: PrismaAdapter(db),
	pages: {
		signIn: "/auth/sign-in",
		verifyRequest: "/auth/verify",
		
	},
	callbacks: {
		session: ({ session, user }) => ({
			...session,
			user: {
				...session.user,
				id: user.id,
			},
		}),
	},
} satisfies NextAuthConfig;