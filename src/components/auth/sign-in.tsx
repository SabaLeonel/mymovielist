"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";


export function SignIn() {

	return (
		<Button asChild
			variant="default"
			className="w-full rounded-full"
		>
			<Link href="/auth/sign-in">Sign In</Link>
		</Button>
	);
}