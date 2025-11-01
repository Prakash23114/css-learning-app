"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function CodeExample({ example }) {
  const [copied, setCopied] = useState(false)
  const [showPreview, setShowPreview] = useState(true)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(example.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-secondary p-4 border-b border-border">
        <h4 className="text-lg font-semibold text-foreground">{example.title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{example.description}</p>
      </div>

      <div className="flex gap-2 p-3 border-b border-border bg-background">
        <button
          onClick={() => setShowPreview(true)}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            showPreview
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setShowPreview(false)}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            !showPreview
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          Code
        </button>
      </div>

      {showPreview ? (
        <div className="p-6 bg-background min-h-64 border-t border-border">
          <iframe
            title="preview"
            className="w-full h-64 border border-border rounded"
            srcDoc={`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 10px; background: #f5f5f5; }
  </style>
</head>
<body>
  ${example.code}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script>
</body>
</html>`}
          />
        </div>
      ) : (
        <div className="p-4 bg-background border-t border-border relative">
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 rounded bg-secondary hover:bg-accent transition-colors"
            title="Copy code"
          >
            {copied ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Copy size={18} className="text-muted-foreground" />
            )}
          </button>
          <pre className="overflow-x-auto">
            <code className="text-sm text-foreground font-mono">{example.code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
