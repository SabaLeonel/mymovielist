import { pages } from "@/config"
import { MovieList } from "@/components/movie/movie-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata() {
	return {
		title: "Popular Movies",
		description: pages.movie.popular.description,
	}
}

export default async function Popular({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const resolvedSearchParams = await searchParams;

	return (
		<MovieList
			list="popular"
			page={resolvedSearchParams?.page as string ?? "1"}
			title={pages.movie.popular.title}
			description={pages.movie.popular.description}
		/>
	)
}
