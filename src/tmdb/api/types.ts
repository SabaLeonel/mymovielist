import { Cast, Crew, Image, Video } from "@/tmdb/models"

export * from "@/tmdb/api/movie/types"
export * from "@/tmdb/api/trending/types"
export * from "@/tmdb/api/person/types"
export * from "@/tmdb/api/collection/types"
export * from "@/tmdb/api/search/types"
export * from "@/tmdb/api/discover/types"
export * from "@/tmdb/api/genres/types"
//export * from "@/tmdb/api/tv/types"

export type ListResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type WithImages = {
  images: {
    posters: Image[]
    backdrops: Image[]
    logos: Image[]
    profiles: Image[]
  }
}

export type WithVideos = {
  videos: {
    results: Video[]
  }
}

export type WithCredits = {
  credits: {
    cast: Cast[]
    crew: Crew[]
  }
}
