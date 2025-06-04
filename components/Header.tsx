import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";
import { BookMarked, BookOpen } from "lucide-react";

export function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-background/80 backdrop-blur z-50">
      <div className="w-full max-w-5xl flex justify-between items-center p-2 sm:p-3 px-3 sm:px-5 text-sm">
        <div className="flex gap-2 sm:gap-5 items-center font-semibold">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg bg-primary/5">
              <BookOpen className="h-5 w-5 text-primary" />
            </span>
            <span className="hidden xs:inline sm:inline">Book Manager</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/books" className="hidden sm:block">
              <Button variant="secondary" className="shadow-md">
                Your books
              </Button>
            </Link>
            <Link href="/books" className="sm:hidden">
              <Button variant="ghost" size="icon" className="shadow-none">
                <BookMarked className="h-10 w-10 text-primary" />
                <span className="sr-only">Your books</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
        </div>
      </div>
    </nav>
  );
}
