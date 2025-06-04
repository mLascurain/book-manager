import { BookForm } from "@/components/books/BookForm";
import { Header } from "@/components/Header";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function EditBookPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) redirect("/auth/login");

  const { data: book, error } = await supabase
    .from("books")
    .select("*")
    .eq("id", params.id)
    .eq("user_id", user.id)
    .single();

  if (error || !book) {
    return <div>Book not found.</div>;
  }

  return (
    <>
      <div className="max-w-xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
        <BookForm userId={user.id} book={book} />
      </div>
    </>
  );
}
