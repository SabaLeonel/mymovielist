"use client";

import React from "react";
import {useRouter} from "next/navigation";

interface LoginButtonProps {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
};

export const LoginButton = ({
	children,
	mode = "redirect",
	asChild = false
}: LoginButtonProps) => {
	const router = useRouter();

	const onClick = () => {
		router.push("/auth/login");
	}

	if (mode === "modal"){

		return (
			<span>
				IMPLEMENT MODAL
			</span>
		);
	}
	

	return (
		<span className="cursor-pointer w-full" onClick={onClick} >
			{children}
		</span>
	);
};