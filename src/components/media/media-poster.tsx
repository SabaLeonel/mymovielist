import { PosterSize, tmdbImage } from "@/tmdb/utils"
import Image from "next/image"
import { ComponentProps } from "react"

import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

interface MediaPosterProps extends ComponentProps<"div"> {
  image?: string
  size?: PosterSize
  alt: string
  priority?: boolean
}

export const MediaPoster: React.FC<MediaPosterProps> = ({
  image,
  size = "w500",
  alt,
  className,
  priority,
  ...props
}) => {
  const src = image ? tmdbImage.poster(image, size) : null

  if (!src) {
    return (
      <div
        className={cn(
          "bg-muted text-muted-foreground size-full rounded-3xl border",
          className
        )}
        {...props}
      >
        <div className="grid size-full place-items-center">
          <Icons.Logo className="size-12" />
        </div>
      </div>
    )
  }

  return (
    <Image
      className={cn(
        "bg-muted size-full rounded-3xl border object-cover",
        className
      )}
      src={src}
      alt={alt}
      priority={priority}
      unoptimized
      fill
    />
  )
}
