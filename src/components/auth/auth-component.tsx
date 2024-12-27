"use client";

import { useSession } from "next-auth/react"
import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";

export function AuthComponent() {
	const { status } = useSession();

	return (
		<>
			{status === "authenticated" && <SignOut />}
			{status === "unauthenticated" && <SignIn />}
		</>
	)
};