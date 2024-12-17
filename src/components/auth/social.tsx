"use client";

import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { Loader } from 'lucide-react';
import { Si42 } from "react-icons/si";
import { useState } from "react";


interface Props {
	disable: boolean;
	onSignIn: (provider: "google" | "42-school") => void;
}

export const Social: React.FC<Props> = ({ disable, onSignIn }) => {
	const [clickedProvider, setClickedProvider] = useState<"google" | "42-school" | null>(null);

	const handleSignIn = (provider: "google" | "42-school") => {
		setClickedProvider(provider);
		onSignIn(provider);
	};

	const OauthButton: React.FC<{ provider: "google" | "42-school"; className: string; icon: JSX.Element; text: string }> = ({ provider, className, icon, text }) => (
		<Button
			disabled={disable}
			onClick={() => handleSignIn(provider)}
			className={className}>
			{clickedProvider === provider && disable && <Loader className="animate-spin" />}
			{icon}
			{text}
		</Button>
	);


	return (
		<div className="flex flex-col items-center w-full gap-2">
			<OauthButton
				provider="42-school"
				className="w-full h-12 text-base rounded-lg bg-[#00BABC] hover:bg-[#00BABC]/80"
				icon={<Si42 className="h-5 w-5" />}
				text="Continue with 42"
			/>
			<OauthButton
				provider="google"
				className="w-full h-12 text-base rounded-lg bg-[#272727] hover:bg-[#3f3f3f]"
				icon={<FaGoogle className="h-5 w-5" />}
				text="Continue with Google"
			/>
		</div>
	);
};