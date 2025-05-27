"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme === "dark" ? "dark" : "light")
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button className="rounded-full p-2 hover:bg-white/10 transition-colors" onClick={toggleTheme}>
      {theme === "light" ? <Moon className="h-5 w-5 text-white" /> : <Sun className="h-5 w-5 text-white" />}
    </button>
  )
}
