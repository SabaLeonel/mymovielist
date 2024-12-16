"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const useDialog = () => {
  const [open, setOpen] = useState(false)
  const pathanme = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathanme])

  return [open, setOpen] as const
}
