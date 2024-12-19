import { pages } from "@/config"

import { MovieList } from "@/components/movie/movie-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata() {
	return {
		title: "Upcoming Movies",
		description: pages.movie.upcoming.description,
	}
}

export default async function Upcoming({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const resolvedSearchParams = await searchParams;

	return (
		<MovieList
			list="upcoming"
			page={resolvedSearchParams?.page as string ?? "1"}
			title={pages.movie.upcoming.title}
			description={pages.movie.upcoming.description}
		/>
	)
}
