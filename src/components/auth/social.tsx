"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export const Social = () => {
	// const onClick = (provider: "google" | "github") => {
	// 	signIn(provider, {
	// 		callbackUrl: "/"
	// 	});
	// }

	return (
		<div className="flex items-center w-full gap-x-2">
			<Button
				onClick={() => signIn("google", { callbackUrl: "/" })}
				className="w-full h-12 text-base rounded-lg bg-[#333333] hover:bg-[#555]">
				<FaGoogle className="h-5 w-5" />
				Continue with Google
			</Button>
		</div>
	);
};