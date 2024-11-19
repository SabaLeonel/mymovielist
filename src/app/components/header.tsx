import Link from "next/link";
import { auth, signIn, signOut } from "~/server/auth";


export async function Header() {
	const session = await auth();

	return (
		<nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
			<div className="flex lg:flex-1">
				<div>
					<h1 className="relative flex select-none flex-row items-baseline text-3xl font-bold">
						<span className="sr-only">MyMovieList</span>
						<span className="tracking-tight text-white cursor-pointer">
							mymovie<span className="text-primary ">list</span>
						</span>
					</h1>
				</div>
			</div>
			<div className="hidden flex-1 items-center justify-end gap-x-6 md:flex">
				<div className="flex items-center gap-4">
					{session?.user ? (
						<form
							action={async () => {
								"use server";
								await signOut();
							}}
						>
							<button
								className="flex fixed top-0 left-0 justify-center pt-8 pb-6 w-full bg-gradient-to-b border-b border-gray-300 lg:static lg:p-4 lg:w-auto lg:bg-gray-200 lg:rounded-xl lg:border from-zinc-200 backdrop-blur-2xl lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
								type="submit"
							>
								Signout
							</button>
						</form>
					) : (
						<form
							action={async () => {
								"use server";
								await signIn();
							}}
						>
							<button
								className="flex fixed top-0 left-0 justify-center pt-8 pb-6 w-full bg-gradient-to-b border-b border-gray-300 lg:static lg:p-4 lg:w-auto lg:bg-gray-200 lg:rounded-xl lg:border from-zinc-200 backdrop-blur-2xl lg:dark:bg-zinc-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit"
								type="submit"
							>
								Signin
							</button>
						</form>
					)}
					<Link href="/sign-in" className="line-clamp-1 flex items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-center text-base font-bold text-white shadow-sm hover:bg-primary/80">{session ? "Sign out" : "Sign in"}</Link>
				</div>
			</div>
		</nav>
	);
}