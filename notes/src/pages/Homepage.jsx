import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <section className="px-6 pt-32 pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
          Start writing your notes privately today.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          You're own personal vault for all your private notes. Start writing today.
        </p>
        <div className="mt-8">
        <Link to ="/register">
         <Button size="lg" className="group">
  Create your vault today
  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
</Button>

          </Link>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl">
        <hr className="rule" />
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>© 2026 Vault. All notes stay yours.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
