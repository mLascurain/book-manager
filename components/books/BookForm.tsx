"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Book = {
  id: string;
  title: string;
  author: string;
  year: string;
  category: string;
  user_id: string;
};

export function BookForm({ userId, book }: { userId: string; book?: Book }) {
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [year, setYear] = useState(book?.year || "");
  const [category, setCategory] = useState(book?.category || "");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const isEdit = !!book;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();

    if (!title || !author || !year || !category) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (isEdit) {
      // Update
      const { error } = await supabase
        .from("books")
        .update({ title, author, year, category })
        .eq("id", book.id)
        .eq("user_id", userId);
      if (error) setError(error.message);
      else router.push("/books");
    } else {
      // Create
      const { error } = await supabase
        .from("books")
        .insert([{ title, author, year, category, user_id: userId }]);
      if (error) setError(error.message);
      else router.push("/books");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Author</label>
        <input
          className="input input-bordered w-full"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Year</label>
        <input
          className="input input-bordered w-full"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <input
          className="input input-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : isEdit ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}
