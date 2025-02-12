import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-background/5 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <a 
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
} 