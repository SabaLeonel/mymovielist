"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes"

export function SignIn() {
	const { theme } = useTheme();
	return (
		<Button asChild
			variant={theme === "dark" ? "default" : "outline"}
			size="lg"
			className="flex flex-col gap-2 border-primary text-primary dark:border-primary dark:text-white"

		>
			<Link href="/auth/sign-in">Sign in</Link>
		</Button>
	);
}