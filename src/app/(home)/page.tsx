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

	return (
		<section>
			<div className="container space-y-8">
				<HomeHero movies={movies} label="Trending Now"/>
			</div>
		</section>
	)
}
