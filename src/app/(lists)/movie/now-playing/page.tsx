import { pages } from "@/config"

import { MovieList } from "@/components/movie/movie-list"

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export async function generateMetadata() {
  return {
    title: "Now Playing Movies",
    description: pages.movie.nowPlaying.description,
  }
}

export default async function NowPlaying({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const resolvedSearchParams = await searchParams;

  return (
    <MovieList
      list="now_playing"
      page={resolvedSearchParams?.page as string ?? "1"}
      title={pages.movie.nowPlaying.title}
      description={pages.movie.nowPlaying.description}
    />
  )
}
