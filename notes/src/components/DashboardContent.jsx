"use client"

import { useState, useEffect } from "react"
import NoteEditor from "./NoteEditor"
import NoteList from "./NoteList"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "./ui/card"



const useAuth = () => ({
  user: { id: "user-1", email: "" },
  logout: async () => {},
})
const useRouter = () => ({
  push: (path) => { window.location.href = path },
})

export default function DashboardContent() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    if (user) {
      const allNotes = JSON.parse(localStorage.getItem("notes") || "[]")
      const userNotes = allNotes.filter((n) => n.userId === user.id)
      setNotes(userNotes)
    }
  }, [user])

  const saveNote = (title, content) => {
    if (!user) return

    const allNotes = JSON.parse(localStorage.getItem("notes") || "[]")
    const now = new Date().toISOString()

    if (selectedNote) {
      // Update existing note
      const index = allNotes.findIndex((n) => n.id === selectedNote.id)
      if (index !== -1) {
        allNotes[index] = {
          ...selectedNote,
          title,
          content,
          updatedAt: now,
        }
      }
    } else {
      // Create new note
      const newNote = {
        id: Date.now().toString(),
        title: title || "Untitled Note",
        content,
        userId: user.id,
        createdAt: now,
        updatedAt: now,
      }
      allNotes.push(newNote)
    }

    localStorage.setItem("notes", JSON.stringify(allNotes))
    const updatedUserNotes = allNotes.filter((n) => n.userId === user.id)
    setNotes(updatedUserNotes)
    setSelectedNote(null)
    setIsCreating(false)
  }

  const deleteNote = (id) => {
    const allNotes = JSON.parse(localStorage.getItem("notes") || "[]")
    const filteredNotes = allNotes.filter((n) => n.id !== id)
    localStorage.setItem("notes", JSON.stringify(filteredNotes))

    const updatedUserNotes = filteredNotes.filter((n) => n.userId === user?.id)
    setNotes(updatedUserNotes)
    setSelectedNote(null)
  }

  const handleLogout = async () => {
    await logout()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div classname="header">
            <h1 className="text-2xl font-bold text-foreground">My Notes</h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Notes List */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Notes</h2>
              <Button
                size="sm"
                onClick={() => {
                  setIsCreating(true)
                  setSelectedNote(null)
                }}
                className="h-8"
              >
                + New
              </Button>
            </div>
            <NoteList
              notes={notes}
              selectedNote={selectedNote}
              onSelectNote={setSelectedNote}
              onDeleteNote={deleteNote}
            />
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {isCreating || selectedNote ? (
              <NoteEditor
                note={selectedNote}
                onSave={saveNote}
                onCancel={() => {
                  setSelectedNote(null)
                  setIsCreating(false)
                }}
              />
            ) : (
              <Card className="border-dashed">
                <CardContent className="pt-12 pb-12">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Select a note to edit or create a new one</p>
                    <Button onClick={() => setIsCreating(true)}>Create New Note</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
