"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, ChevronLeft } from 'lucide-react';
import { LoginButton } from "@/components/auth/login-button";
import { signIn } from "next-auth/react";
import { Social } from "@/components/auth/social";
import resendLogin from "@/server/actions/resend-login";

export const LoginForm = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<div className="flex w-full max-w-80 flex-col items-center justify-center gap-3">
			<div className="relative min-h-[243px] w-full">
				<div
					className={`${showForm ? 'opacity-0 pointer-events-none' : 'opacity-100'
						} transition-opacity  will-change-auto transform-none`}
				>
					<div className="flex flex-col items-center gap-4">
						<h1 className="mt-4 text-2xl font-semibold tracking-tight">
							<span className="tracking-tight text-white">
								Log in to mymovie<span className="text-primary">list</span>
							</span>
						</h1>
						<p className="text-gray-300 text-sm text-center">Welcome back!</p>
						<Social />
						<div className="flex items-center w-full">
							<hr className="flex-grow border-gray-300" />
							<span className="mx-2 text-gray-300 text-xs">or</span>
							<hr className="flex-grow border-gray-300" />
						</div>
						<Button
							className="w-full"
							variant="default"
							onClick={() => setShowForm(true)}
						>
							<Mail />
							Continue with Email
						</Button>
						<div className="mt-4 text-center text-xs text-gray-500">
							By creating an account, you agree to our Terms of Service and Privacy Policy.
						</div>
					</div>
				</div>
				<form action={resendLogin}
					className={`absolute left-0 top-0 h-full w-full ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'
						} transition-opacity will-change-auto transform-none`}
				>
					<div className="flex flex-col items-center gap-3">
						<h1 className="mt-4 text-2xl font-semibold tracking-tight">
							What's your email address?
						</h1>
						<div className="flex w-full flex-col">
							<input
								className="border-input placeholder:text-muted-foreground flex w-full rounded-md border bg-transparent py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 mt-4 h-11 px-4 focus-visible:ring-blue-500/30"
								type="text"
								name="email"
								placeholder="Enter your email"
							/>
						</div>
						<Button type="submit" className="w-full" variant="default">
							Send me magic link
						</Button>
						<Button
							className="text-sm font-medium mt-2 hover:bg-primary/80 hover:text-white"
							variant="ghost"
							onClick={() => setShowForm(false)}
							type="button"
						>
							<ChevronLeft />
							Back
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}