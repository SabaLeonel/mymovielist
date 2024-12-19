import { HomeHero } from "@/components/home/home-hero";
import { TrendCarousel } from "@/components/trend-carousel";
import { tmdb } from "@/tmdb/api";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Home",
}

export default async function Home() {
	const { results: trending_movies } = await tmdb.trending.movie({
		time: "day",
		page: "1",
	})

	const { results: now_playing_movies } = await tmdb.movie.lists({
		region: "US",
		list: "now_playing",
		page: "1",
	})

	const { results: upcoming_movies } = await tmdb.discover.movies({
		watch_region: "US",
		page: "1",
		sort_by: "popularity.desc",
		primary_release_year: "2025",
	})

	const { results: discover_movies } = await tmdb.discover.movies({
		watch_region: "US",
		page: "1",
		sort_by: "vote_count.desc",
	})


	return (
		<section>
			<div>
				<div className="animate-fadeDown relative flex flex-col items-center justify-center space-y-4 py-10">
					<h1 className="text-center text-4xl font-bold sm:text-6xl">mymovie<span className="text-primary">list</span></h1>
					<p className="text-center">Made with Next.js, React and Tailwindcss</p>
				</div>
				<div className="animate-fadeUp container relative space-y-8">
					<HomeHero movies={trending_movies} label="Trending Now" />
					<TrendCarousel
						type="movie"
						title="Trending Movies"
						link="/trending/movie"
						items={trending_movies}
					/>
					<TrendCarousel
						type="movie"
						title="In Theaters"
						link="/movie/now-playing"
						items={now_playing_movies}
					/>
					<TrendCarousel
						type="movie"
						title="Coming Soon to Theaters"
						link="/movie/upcoming"
						items={upcoming_movies}
					/>
					<TrendCarousel
						type="movie"
						title="More to Explore"
						link="/movie/discover"
						items={discover_movies}
					/>
				</div>
			</div>
		</section>
	)
}
