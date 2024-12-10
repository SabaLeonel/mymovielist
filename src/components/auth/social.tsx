"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: "/"
		});
	}

	return (
		<div className="flex items-center w-full gap-x-2">
			<Button
				onClick={() => signIn("google")}
				className="w-full h-11 text-black bg-white dark:bg-white hover:text-black hover:bg-white/85 dark:hover:bg-white/85">
				<FcGoogle className="w-5 h-5" />
				Sign in with Google
			</Button>
		</div>
	);
};