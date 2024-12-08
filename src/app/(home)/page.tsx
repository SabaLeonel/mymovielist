import { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero"
import { tmdb } from "@/tmdb/api"


export const metadata: Metadata = {
	title: "Home",
}

export default async function Home() {
	const { results: movies } = await tmdb.trending.movie({
		time: "day",
		page: "1",
	})
	console.log(movies);

	return (
		<section>
			<div >
				<div className="flex flex-col items-center justify-center space-y-4 py-10">
					<h1 className="text-4xl font-bold text-center sm:text-6xl">mymovie<span className="text-primary">list</span></h1>
					<p className="text-center">Made with Next.js, React and Tailwindcss</p>
				</div>
				<div className="container space-y-8">
					<HomeHero movies={movies} label="Trending Now" />
				</div>
			</div>
		</section>
	)
}
