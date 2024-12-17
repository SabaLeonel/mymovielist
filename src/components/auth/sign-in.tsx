"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";


export function SignIn() {

	return (
		<Button asChild
			variant="default"
			className="w-full rounded-full"
		>
			<Link href="/auth/sign-in"><CircleUserRound />Sign In</Link>
		</Button>
	);
}