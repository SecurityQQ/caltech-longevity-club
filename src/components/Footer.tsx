import { CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-background/5 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
          >
            {CONTACT_EMAIL}
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link 
            href="https://www.instagram.com/caltechlongevity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
} 