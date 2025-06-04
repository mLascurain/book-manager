import { Button } from "@/components/ui/button";
import { BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { BookCard } from "@/components/books/BookCard";

export default async function BooksPage() {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) redirect("/auth/login");

  const { data: books, error } = await supabase
    .from("books")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-7xl text-center py-12">
          <h2 className="text-xl font-bold text-destructive mb-4">
            Error loading books
          </h2>
          <p className="text-muted-foreground">{error.message}</p>
        </div>
      </main>
    );
  }

  if (!books || books.length === 0) {
    return (
      <main className="min-h-fit px-4 py-8">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-lg font-medium">No books yet</h3>
          <p className="text-muted-foreground">
            Start building your collection by adding your first book.
          </p>
          <Link href="/books/new" className="mt-4">
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Book
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-fit px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Books
          </h1>
          <p className="mt-2 text-muted-foreground">
            Manage your personal book collection
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/books/new">
              <Button size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Add Book
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}
