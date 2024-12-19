import { pages } from "@/config"

import { TrendList } from "@/components/trend-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata() {
	return {
		title: "Trending Movies",
		description: pages.trending.movie.description,
	}
}

export default async function TrendingPage({ searchParams }:
	{ searchParams: Promise<SearchParams> }) {

	const resolvedSearchParams = await searchParams;
	return (
		<TrendList
			type="movie"
			time="day"
			title="Trending Movies"
			description={pages.trending.movie.description}
			page={resolvedSearchParams?.page as string}
		/>
	)
}
