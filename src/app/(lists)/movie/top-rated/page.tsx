import { pages } from "@/config"

import { MovieList } from "@/components/movie/movie-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata() {
  return {
    title: "Top Rated Movies",
    description: pages.movie.topRated.description,
  }
}

export default async function TopRated({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const resolvedSearchParams = await searchParams;

  return (
    <MovieList
      list="top_rated"
      page={resolvedSearchParams?.page as string ?? "1"}
      title={pages.movie.topRated.title}
      description={pages.movie.topRated.description}
    />
  )
}
