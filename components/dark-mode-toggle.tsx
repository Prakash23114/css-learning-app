"use client"

import { Sun, Moon } from "lucide-react"

export default function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-slate-400" />}
    </button>
  )
}
