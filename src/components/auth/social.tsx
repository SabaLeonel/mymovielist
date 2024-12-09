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
				variant="default"
				onClick={() => signIn("google")}
				className="w-full text-black  dark:bg-white hover:text-black dark:hover:bg-white/85">
				<FcGoogle className="w-5 h-5" />
				Sign in with Google
			</Button>
		</div>
	);
};