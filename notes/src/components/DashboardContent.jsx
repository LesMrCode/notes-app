import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";
import { Button } from "../components/ui/button.jsx";
import { Card, CardContent } from "../components/ui/card.jsx";

export default function DashboardContent() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  // This redirects unauthenticated visitors, so that the dashboard is only accessible to logged-in users.

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        navigate("/login");
        return;
      }
      setUser(data.user);
      setLoading(false);
    };
    getUser();
  }, [navigate]);

 // Retrieves the users notes from the cloud.

  const loadNotes = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });

    if (!error) setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, [user]);

  //  Create a new note or update an existing one.

  const saveNote = async (title, content) => {
    if (!user) return;
    const now = new Date().toISOString();

    if (selectedNote) {
      // Update existing note
      await supabase
        .from("notes")
        .update({ title, content, updated_at: now })
        .eq("id", selectedNote.id);
    } else {
      // Create new note
      await supabase.from("notes").insert([
        { title: title || "Untitled Note", content, user_id: user.id, created_at: now, updated_at: now }
      ]);
    }

    setSelectedNote(null);
    setIsCreating(false);
    loadNotes();
  };

  // Delete a note
  const deleteNote = async (id) => {
    await supabase.from("notes").delete().eq("id", id);
    setSelectedNote(null);
    loadNotes();
  };

  // Logs out user
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Vault</h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>

          <Button variant="outline" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
      </header>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Notes List */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Notes</h2>
              <Button
                size="sm"
                onClick={() => {
                  setIsCreating(true);
                  setSelectedNote(null);
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
                  setSelectedNote(null);
                  setIsCreating(false);
                }}
              />
            ) : (
              <Card className="border-dashed">
                <CardContent className="pt-12 pb-12">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Select a note to edit or create a new one
                    </p>
                    <Button onClick={() => setIsCreating(true)}>
                      Create New Note
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
