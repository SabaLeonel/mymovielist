"use client";

import { Social } from "@/components/auth/social";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/server/actions/login";
import { LoginSchema } from "@/server/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";

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

	return (
		<div>
			<div
				 className={`transition-all  ease-out ${
					showForm ? "opacity-0 pointer-events-none" : "opacity-100 duration-1000 animate-fadeUp"
				  }`}
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



			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={`absolute left-0 top-0 h-full w-full transition-all ease-out ${
						showForm ? "opacity-100  duration-1000 animate-fadeUp" : "opacity-0 pointer-events-none"
					  }`}
				>
					<div className="flex flex-col items-center gap-3">
						<h1 className="mt-4 text-2xl font-semibold tracking-tight">
							What's your email address?
						</h1>
						<div className="flex w-full flex-col">
							<FormField control={form.control} name="email" render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											className="border-input placeholder:text-muted-foreground flex w-full rounded-md border bg-transparent py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 mt-4 h-11 px-4 focus-visible:ring-blue-500/30"
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

						<Button type="submit" className="w-full" variant="default" disabled={isPending}>
							{isPending ? (
								<>
									<Loader2 className="animate-spin" />
									Please wait
								</>
							) : (
								"Send me magic link"
							)}
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
			</Form>
		</div>
	);
}




