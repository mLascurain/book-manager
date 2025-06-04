"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
};

export function BookList({ books }: { books: Book[] }) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this book?")) return;
    setLoadingId(id);
    const supabase = createClient();
    await supabase.from("books").delete().eq("id", id);
    setLoadingId(null);
    router.refresh();
  };

  if (!books.length) return <div>No books found.</div>;

  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="p-2 border">Title</th>
          <th className="p-2 border">Author</th>
          <th className="p-2 border">Year</th>
          <th className="p-2 border">Category</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td className="p-2 border">{book.title}</td>
            <td className="p-2 border">{book.author}</td>
            <td className="p-2 border">{book.year}</td>
            <td className="p-2 border">{book.category}</td>
            <td className="p-2 border flex gap-2">
              <Link href={`/books/${book.id}/edit`} className="btn btn-sm">
                Edit
              </Link>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(book.id)}
                disabled={loadingId === book.id}
              >
                {loadingId === book.id ? "Deleting..." : "Delete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
