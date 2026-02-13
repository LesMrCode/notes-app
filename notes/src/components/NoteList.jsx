import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";

export default function NoteList({ notes, selectedNote, onSelectNote, onDeleteNote }) {
  if (!notes.length) {
    return (
      <Card className="border-dashed">
        <CardContent className="pt-4 pb-4 text-center text-muted-foreground text-sm">
         Create your first note!
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
      {notes.map((note) => (
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
                  {note.content.slice(0, 60)}{note.content.length > 60 ? "..." : ""}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Last updated: {new Date(note.updated_at).toLocaleDateString()}{" "}
                  {new Date(note.updated_at).toLocaleTimeString()}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:bg-destructive/10 h-7 w-7 p-0"
                onClick={(e) => {
                  e.stopPropagation(); 
                  onDeleteNote(note.id);
                }}
              >
                ×
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
