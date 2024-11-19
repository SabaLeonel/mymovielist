"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const Social = () => {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: "/"
		});
	}

	return (
		<div className="flex items-center w-full gap-x-2">
			<Button
				variant="outline"
				onClick={() => signIn("google")}
				className="w-full text-black">
				<FcGoogle className="w-5 h-5" />
				Sign in with Google
			</Button>
		</div>
	);
};