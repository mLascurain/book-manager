import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/lib/utils";
import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full shadow-lg bg-primary/5">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <Link href={"/"}>Book Manager</Link>
          <div className="flex items-center gap-2">
            <Link href="/books">
              <Button variant="secondary" className="shadow-md">
                Your books
              </Button>
            </Link>
          </div>
        </div>
        {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
      </div>
    </nav>
  );
}
