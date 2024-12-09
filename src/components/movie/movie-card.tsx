import { Movie } from "@/tmdb/models"
import { format } from "@/tmdb/utils"
import Link from "next/link"
import React from "react"

import { MediaCard } from "@/components/media/media-card"
import { MediaPoster } from "@/components/media/media-poster"
import { MediaRating } from "@/components/media/media-rating"
import { formatValue } from "@/lib/utils"

export const MovieCard: React.FC<Movie> = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  release_date,
}) => {
  return (
    <Link href={`/movie/${id}`} key={id} prefetch={false}>
      <MediaCard.Root>
        <MediaPoster image={poster_path} alt={title} />
        <MediaCard.Content>
          <MediaRating
            average={vote_average}
            count={vote_count}
            className="mb-2"
          />
          <MediaCard.Title>{title}</MediaCard.Title>
          <MediaCard.Excerpt>
            {formatValue(release_date, format.date)}
          </MediaCard.Excerpt>
        </MediaCard.Content>
      </MediaCard.Root>
    </Link>
  )
}
