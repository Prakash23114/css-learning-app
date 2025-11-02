"use client"

import { X } from "lucide-react"
import { projectsData } from "@/data/projects"

export default function Projects({ projectId, onClose }) {
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex flex-col">
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between shadow-lg">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-primary/80 rounded transition-colors"
          aria-label="Close project"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-auto bg-white">
        <iframe
          srcDoc={project.content}
          title={project.title}
          className="w-full h-full border-none"
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  )
}
