"use client"

import { useState } from "react"
import CodeExample from "./code-example"

export default function Content({ lesson }) {
  const [showSandbox, setShowSandbox] = useState(false)
  const [code, setCode] = useState("")

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a lesson to begin</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-primary mb-4">{lesson.name}</h2>
      <p className="text-foreground text-lg leading-relaxed mb-8">{lesson.content}</p>

      {lesson.examples && lesson.examples.length > 0 && (
        <div className="space-y-8 mb-8">
          <div className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Interactive Examples</h3>
            <div className="space-y-6">
              {lesson.examples.map((example, idx) => (
                <CodeExample key={idx} example={example} />
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowSandbox(!showSandbox)}
        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        {showSandbox ? "Hide" : "Try It Yourself"}
      </button>

      {showSandbox && (
        <div className="mt-8 border-2 border-border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Interactive Sandbox</h3>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your HTML/CSS code here..."
            className="w-full h-48 p-4 bg-secondary text-foreground rounded border border-border font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="mt-4 p-4 bg-background border border-border rounded">
            <p className="text-sm text-muted-foreground mb-2">Preview:</p>
            <iframe
              title="sandbox"
              className="w-full h-48 border border-border rounded"
              srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 10px; }
    ${code.includes("<style>") ? "" : ""}
  </style>
</head>
<body>
  ${code}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script>
</body>
</html>`}
            />
          </div>
        </div>
      )}
    </div>
  )
}
