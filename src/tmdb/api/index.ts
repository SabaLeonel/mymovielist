import { collection } from "@/tmdb/api/collection"
import { discover } from "@/tmdb/api/discover"
import { genres } from "@/tmdb/api/genres"
import { movie } from "@/tmdb/api/movie"
import { person } from "@/tmdb/api/person"
import { search } from "@/tmdb/api/search"
import { trending } from "@/tmdb/api/trending"

export const tmdb = {
  collection,
  discover,
  genres,
  movie,
  person,
  search,
  trending,
}
