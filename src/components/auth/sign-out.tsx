"use client"
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignOut() {
	return (
		<Button
			variant="default"
			className="w-full rounded-full"
			onClick={() => signOut()}>Sign Out
		</Button>
	);
}