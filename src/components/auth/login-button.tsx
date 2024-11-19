"use client";

import React from "react";

interface LoginButtonProps {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
}

export const LoginButton = ({
	children,
	mode = "modal",
	asChild = false
}: LoginButtonProps) => {

	const onClick= () => {
		console.log("LoginButton clicked");
	}

	return (
		<span onClick={onClick} className="cursor-pointer">
			{children}
		</span>
	);
}