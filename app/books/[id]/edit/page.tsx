import { BookForm } from "@/components/books/BookForm";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

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
    return (
      <main className="min-h-fit px-4 py-8">
        <div className="mx-auto max-w-2xl text-center py-12">
          <BookOpen className="mx-auto mb-4 h-8 w-8 text-destructive" />
          <p className="text-destructive">Book not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-fit px-4 py-8">
      <div className="mx-auto max-w-2xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Book</h1>
          <p className="mt-2 text-muted-foreground">
            Update your book details below
          </p>
        </div>

        {/* Form Card */}
        <Card className="w-50 mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">Book Details</CardTitle>
          </CardHeader>
          <CardContent>
            <BookForm userId={user.id} book={book} />
          </CardContent>
        </Card>

        {/* Form Help Text */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>* Required fields</p>
        </div>
      </div>
    </main>
  );
}
