
"use server"

import { auth } from "@/server/auth";
import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";

export const AuthComponent = async () => {
	const session = await auth();

	return session ? (<SignOut />) : (<SignIn />);
};