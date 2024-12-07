"use client"
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SignOut() {
	return (
		<Button
			variant="default"
			size="lg"
			onClick={() => signOut()}>Sign Out
		</Button>
	);
}