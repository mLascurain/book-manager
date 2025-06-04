"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function deleteBook(formData: FormData) {
  const bookId = formData.get("bookId");
  if (!bookId) return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  await supabase.from("books").delete().eq("id", bookId).eq("user_id", user.id);
  redirect("/books");
}
