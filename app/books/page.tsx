import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { BookList } from "@/components/books/BookList";

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
    return <div>Error loading books: {error.message}</div>;
  }

  return (
    <>
      <div className="max-w-2xl mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Books</h1>
          <Link href="/books/new" className="btn btn-primary">
            Add Book
          </Link>
        </div>
        <BookList books={books || []} />
      </div>
    </>
  );
}
