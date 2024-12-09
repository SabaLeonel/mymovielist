import { HomeHero } from "@/components/home/home-hero";
import { TrendCarousel } from "@/components/trend-carousel";
import { tmdb } from "@/tmdb/api";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Home",
}

export default async function Home() {
	const { results: movies } = await tmdb.trending.movie({
		time: "day",
		page: "1",
	})

	return (
		<section>
			<div>
				<div className="flex flex-col items-center justify-center space-y-4 py-10 animate-fade">
					<h1 className="text-4xl font-bold text-center sm:text-6xl">mymovie<span className="text-primary">list</span></h1>
					<p className="text-center">Made with Next.js, React and Tailwindcss</p>
				</div>
				<div className="container space-y-8">
					<HomeHero movies={movies} label="Trending Now" />
					<TrendCarousel
						type="movie"
						title="Trending Movies"
						link="/trending/movie"
						items={movies}
					/>
				</div>
			</div>
		</section>
	)
}
