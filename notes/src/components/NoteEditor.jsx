"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Button } from "../ui/button"

export default function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    } else {
      setTitle("")
      setContent("")
    }
  }, [note])

  const handleSave = () => {
    if (title.trim() || content.trim()) {
      onSave(title, content)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note ? "Edit Note" : "Create New Note"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="note-editor">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={12}
            className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
          />
        </div>
        {note && (
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date(note.updatedAt).toLocaleDateString()} at{" "}
            {new Date(note.updatedAt).toLocaleTimeString()}
          </p>
        )}
        <div className="flex gap-2">
          <Button onClick={handleSave} className="flex-1">
            {note ? "Save Changes" : "Create Note"}
          </Button>
          <Button variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
