export function Header() {
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
					<a className="line-clamp-1 flex items-center justify-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-center text-base font-bold text-white shadow-sm hover:bg-primary/80" href="/sign-in">Sign In </a>
				</div>
			</div>
		</nav>
	);
}