"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, FileText, Brain } from "lucide-react"

export default function Sidebar({
  lessonsData,
  selectedSection,
  onSelectLesson,
  onSelectSection,
  onQuizClick,
  onProjectClick,
}) {
  const [expandedSections, setExpandedSections] = useState({
    bootstrap: true,
    grid: false,
    flexbox: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sections = ["bootstrap", "grid", "flexbox"]

  return (
    <aside className="w-64 bg-card border-r border-border overflow-y-auto shadow-md">
      <div className="p-4 space-y-2">
        {sections.map((section) => (
          <div key={section} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => toggleSection(section)}
                className="p-1 hover:bg-secondary rounded transition-colors"
              >
                {expandedSections[section] ? (
                  <ChevronDown size={18} className="text-primary" />
                ) : (
                  <ChevronRight size={18} className="text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => onSelectSection(section)}
                className={`flex-1 text-left font-semibold text-sm py-2 px-2 rounded transition-colors ${
                  selectedSection === section
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {lessonsData[section].title}
              </button>
            </div>

            {expandedSections[section] && (
              <div className="ml-6 space-y-1 mb-3">
                {lessonsData[section].lessons.map((lesson, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectLesson(lesson)}
                    className="w-full text-left text-sm py-2 px-2 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground truncate"
                  >
                    {lesson.name}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  onSelectSection(section)
                  onQuizClick()
                }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded text-sm font-medium bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                <Brain size={16} />
                Quiz
              </button>
              <button
                onClick={() => onProjectClick(section)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <FileText size={16} />
                Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
