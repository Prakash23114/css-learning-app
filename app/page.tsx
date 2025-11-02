"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import Content from "@/components/content"
import Quiz from "@/components/quiz"
import DarkModeToggle from "@/components/dark-mode-toggle"
import Projects from "@/components/projects" // Import Projects component
import lessonsData from "@/data/lessons"
import quizData from "@/data/quiz"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [selectedSection, setSelectedSection] = useState("bootstrap")
  const [showQuiz, setShowQuiz] = useState(false)
  const [showProject, setShowProject] = useState(false) // Added project state
  const [projectId, setProjectId] = useState(null) // Added project ID state
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson)
    setShowQuiz(false)
    setShowProject(false) // Reset project state
  }

  const handleSectionClick = (section) => {
    setSelectedSection(section)
    setSelectedLesson(null)
    setShowQuiz(false)
    setShowProject(false) // Reset project state
  }

  const handleQuizClick = () => {
    setShowQuiz(true)
    setSelectedLesson(null)
    setShowProject(false) // Reset project state
  }

  const handleProjectClick = (section) => {
    setProjectId(section)
    setShowProject(true)
    setSelectedLesson(null)
    setShowQuiz(false)
  }

  if (!mounted) return null

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Top Bar */}
        <header className="border-b border-border bg-card shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-primary">CSS Tutorial</h1>
            <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            lessonsData={lessonsData}
            selectedSection={selectedSection}
            onSelectLesson={handleSelectLesson}
            onSelectSection={handleSectionClick}
            onQuizClick={handleQuizClick}
            onProjectClick={handleProjectClick} // Pass project click handler
          />

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {showProject ? (
              <div>
                <Projects projectId={projectId} onClose={() => setShowProject(false)} />
              </div>
            ) : showQuiz ? (
              <Quiz quizData={quizData[selectedSection]} section={selectedSection} />
            ) : selectedLesson ? (
              <Content lesson={selectedLesson} />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-background to-card">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-foreground mb-2">Welcome to CSS Tutorial</p>
                  <p className="text-muted-foreground">Select a lesson from the sidebar to get started</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
