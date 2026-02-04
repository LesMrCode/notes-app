"use client"

import React from "react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

export default function NoteList({ notes, selectedNote, onSelectNote, onDeleteNote }) {
  return (
    <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
      {notes.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="pt-4 pb-4">
            <p className="text-sm text-muted-foreground text-center">No notes yet. Create your first note!</p>
          </CardContent>
        </Card>
      ) : (
        notes.map((note) => (
          <Card
            key={note.id}
            className={`cursor-pointer transition-colors ${
              selectedNote?.id === note.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
            }`}
            onClick={() => onSelectNote(note)}
          >
            <CardContent className="pt-4 pb-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{note.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {note.content.slice(0, 60)}
                    {note.content.length > 60 ? "..." : ""}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{new Date(note.updatedAt).toLocaleDateString()}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDeleteNote(note.id)
                  }}
                  className="text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
                >
                  ×
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
