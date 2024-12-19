"use client";

import { Social } from "@/components/auth/social";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/server/actions/login";
import { LoginSchema } from "@/server/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2, Mail, WandSparkles } from 'lucide-react';
import { signIn } from "next-auth/react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Separator } from "../ui/separator";

export const LoginForm = () => {
	const [showForm, setShowForm] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState<string | undefined>("");

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("");
		setIsPending(true);
		login(values)
			.then((data) => {
				setError(data?.error);
			}).finally(() => {
				setIsPending(false);
			});
	};

	const handleSignIn = async (provider: "google" | "42-school") => {
        setIsPending(true);
        try {
            await signIn(provider, { callbackUrl: "/" });
        } finally {
            setIsPending(false);
        }
    };

	return (
		<>
			{showForm ? (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="animate-zoomIn absolute left-0 top-0 size-full"
					>
						<div className="flex flex-col items-center gap-3">
							<h1 className="mt-4 text-2xl font-semibold tracking-tight">
								{`What's your email address?`}
							</h1>
							<div className="flex w-full flex-col">
								<FormField control={form.control} name="email" render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="mt-4 h-11 px-4 text-sm focus-visible:ring-blue-500/30"
												type="email"
												disabled={isPending}
												{...field}
												placeholder="Enter your email"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
								<FormError message={error} />
							</div>

							<Button type="submit" className="h-11 w-full" variant="default" disabled={isPending}>
								{isPending ? (
									<>
										<Loader2 className="animate-spin" />
										Please wait
									</>
								) : (
									<>
										<WandSparkles />
										Send me magic link
									</>
								)}
							</Button>
							<Button
								className="hover:bg-primary/80 mt-2 h-8 p-2 text-sm font-medium text-slate-500 hover:text-white"
								variant="ghost"
								onClick={() => setShowForm(false)}
								type="button"
							>
								<ChevronLeft />
								Back
							</Button>
						</div>
					</form>
				</Form>
			) : (
				<div className="animate-zoomIn">
					<div className="flex flex-col items-center gap-4">
						<h1 className="mt-4 text-3xl font-semibold tracking-tight">
							<span className="tracking-tight text-white">
								Log in to mymovie<span className="text-primary">list</span>
							</span>
						</h1>
						<Social disable={isPending} onSignIn={handleSignIn} />
						<Separator className="my-1 bg-gray-500/50" />
						<Button
							className="h-12 w-full rounded-lg text-base"
							variant="default"
							disabled={isPending}
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
			)}
		</>
	);
}




