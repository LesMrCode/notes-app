import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2" aria-label="Vault home">
          <Lock className="h-5 w-5 text-foreground" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Vault
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="text-foreground">
            Log in
          </Button>
          </Link>
        </div>
           </div>
    </header>
  );
}
