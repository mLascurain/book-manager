import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-primary/5 py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="https://github.com/mlascurain"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              mLascurain
            </Link>
            . All rights reserved.
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            Powered by{" "}
            <Link
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </Link>
            {" & "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Next.js
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/mlascurain/book-manager"
            target="_blank"
            className="hover:underline"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
