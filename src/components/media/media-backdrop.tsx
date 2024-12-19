import { ComponentProps } from "react"
import Image from "next/image"
import { BackdropSize, tmdbImage } from "@/tmdb/utils"


import { cn } from "@/lib/utils"

interface MediaBackdropProps extends ComponentProps<"div"> {
  image?: string
  size?: BackdropSize
  alt: string
  priority?: boolean
}

export const MediaBackdrop: React.FC<MediaBackdropProps> = ({
  image,
  size = "original",
  alt,
  className,
  priority,
  ...props
}) => {
  const src = image ? tmdbImage.backdrop(image, size) : null

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
          Image does not exist
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
