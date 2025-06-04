import { Header } from "@/components/Header";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
  BookA,
  BookCopy,
  BookHeart,
  BookKey,
  BookOpen,
  BookPlus,
  LogInIcon,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background scroll-smooth">
      <Header />

      <section
        id="hero"
        className="flex flex-1 flex-col items-center justify-center px-4 text-center min-h-svh scroll-mt-24"
      >
        <div className="mx-auto max-w-3xl space-y-12 py-16">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/5">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-secondary-foreground drop-shadow">
            Manage Your Books <span className="text-primary">Effortlessly</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Keep track of your reading journey, organize your collection with
            our intuitive book management platform.
          </p>
          <div className="mt-8">
            <Link href="/auth/sign-up">
              <Button size="lg" className="px-8 py-6 text-lg shadow-md">
                Get Started — Its Free
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. Start your for free today.
            </p>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="flex flex-col items-center justify-center min-h-dvh px-4 bg-primary/5 text-center scroll-mt-24"
      >
        <div className="mx-auto max-w-4xl py-16 space-y-10">
          <h2 className="text-3xl font-bold mb-4">Why Book Manager?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/25 my-2">
                <BookPlus className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary">
                Personal Library
              </h3>
              <p className="text-muted-foreground">
                Easily add, edit, and organize all your books in one place.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/25 my-2">
                <BookKey className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary">
                Secure & Private
              </h3>
              <p className="text-muted-foreground">
                Your data is safe and only you can access your collection.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/25 my-2">
                <BookHeart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary">
                Accessible Anywhere
              </h3>
              <p className="text-muted-foreground">
                Use Book Manager from any device, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="flex flex-col items-center justify-center min-h-dvh px-4 text-center scroll-mt-24"
      >
        <div className="mx-auto max-w-4xl py-16 space-y-10">
          <h2 className="text-3xl font-bold mb-4 text-primary">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/5 my-2">
                <LogInIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                1. Sign Up
              </h3>
              <p className="text-muted-foreground">
                Create your free account in seconds and start your reading
                journey.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/5 my-2">
                <BookCopy className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                2. Add Books
              </h3>
              <p className="text-muted-foreground">
                Add books to your collection, categorize, and personalize your
                library.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg bg-primary/5 my-2">
                <BookA className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                3. Enjoy & Organize
              </h3>
              <p className="text-muted-foreground">
                Access your library anywhere, anytime, and keep your reading
                organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="footer"
        className="w-full flex items-center bg-primary/5 justify-center border-t mx-auto text-center text-xs gap-8 py-16"
      >
        <p>
          {""}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            mLascurain
          </a>
          {""} &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <ThemeSwitcher />
      </footer>
    </div>
  );
}
