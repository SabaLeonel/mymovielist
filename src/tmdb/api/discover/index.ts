import { api } from "@/tmdb/api/api"
import {
	DiscoverMovieRequestParams,
	ListResponse,
} from "@/tmdb/api/types"
import { Movie, MovieWithMediaType } from "@/tmdb/models"

/**
 * Fetches a list of movies based on the provided request parameters.
 *
 * @param args - The request parameters for discovering movies.
 * @returns A Promise that resolves to a ListResponse containing the discovered movies.
 */
const movie = (args: DiscoverMovieRequestParams) =>
	api.fetcher<ListResponse<Movie>>({
		endpoint: "discover/movie",
		params: args as Record<string, string>,
	})

const movies = (args: DiscoverMovieRequestParams) =>
	api.fetcher<ListResponse<MovieWithMediaType>>({
		endpoint: "discover/movie",
		params: args as Record<string, string>,
	})

export const discover = {
	movie,
	movies,
}
