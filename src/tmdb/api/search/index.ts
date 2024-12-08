import {
	MovieWithMediaType,
	PersonWithMediaType,
  } from "@/tmdb/models"
  
  import { api } from "../api"
  import { ListResponse } from "@/tmdb/api/types"
  import { SearchRequestParams } from "@/tmdb/api/search/types"
  
  /**
   * Fetches a list of movies, and people based on the specified search query.
   *
   * @param {SearchRequestParams} params - The parameters for the search request, including the search query, adult content filter, and page number.
   * @returns {Promise<ListResponse<MovieWithMediaType | PersonWithMediaType>>} A promise that resolves to the list of movies, TV shows, and people.
   * @see https://developers.themoviedb.org/3/search-multi
   */
  const multi = async ({
	query,
	adult = false,
	page = "1",
  }: SearchRequestParams) =>
	api.fetcher<
	  ListResponse<MovieWithMediaType | PersonWithMediaType>
	>({
	  endpoint: "/search/multi",
	  params: {
		query,
		page,
		include_adult: String(adult),
	  },
	})
  
  export const search = {
	multi,
  }
  