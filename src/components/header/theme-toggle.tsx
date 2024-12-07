"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()
  
	const iconProps = {
	  className: "size-4 mr-2",
	}
  
	function handleClick(value: string) {
	  setTheme(value);
	}
  
	return (
	  <div className="flex flex-col gap-2">
		{["light", "dark"].map((value) => (
		  <Button
			key={value}
			variant={theme === value ? "default" : "outline"}
			onClick={() => handleClick(value)}
		  >
			{value === "light" && <Sun {...iconProps} />}
			{value === "dark" && <Moon {...iconProps} />}
			<span className="capitalize">{value}</span>
		  </Button>
		))}
	  </div>
	)
  }