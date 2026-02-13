import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
          Start writing your notes privately today.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          You're own personal vault for all your private notes. Start writing today.
        </p>
        <div className="mt-8">
        <Link to ="/register">
         <Button
  size="lg"
  className="group bg-blue-600 text-white hover:bg-blue-700 rounded-full px-15 py-6 flex items-center gap-2"
>
  Create your vault today
  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
</Button>

          </Link>
        </div>
      </div>
    </section>
  );
}
