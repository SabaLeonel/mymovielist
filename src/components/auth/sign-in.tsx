"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SignIn() {
	return (
		<Button asChild
			variant="default"
			size="lg"

		>
			<Link href="/auth/sign-in">Sign in</Link>
		</Button>
	);
}