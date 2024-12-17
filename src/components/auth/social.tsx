"use client";

import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

interface Props {
	disable: boolean;
	onSignIn: (provider: "google" | "github") => void;
}

export const Social: React.FC<Props> = ({ disable, onSignIn }) => {

	return (
		<div className="flex items-center w-full gap-x-2">
			<Button
				disabled={disable}
				onClick={() => onSignIn("google")}
				className="w-full h-12 text-base rounded-lg bg-[#333333] hover:bg-[#555]">
				<FaGoogle className="h-5 w-5" />
				Continue with Google
			</Button>
		</div>
	);
};