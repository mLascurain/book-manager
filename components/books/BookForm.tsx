"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Biography",
  "History",
  "Self-Help",
  "Classic Literature",
  "Adventure",
  "Thriller",
  "Horror",
  "Poetry",
  "Drama",
  "Other",
];

interface BookFormProps {
  userId: string;
  book?: {
    id: string;
    title: string;
    author: string;
    year: number;
    category: string;
  };
}

export function BookForm({ userId, book }: BookFormProps) {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    year: book?.year ? String(book.year) : "",
    category: book?.category || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const isEdit = !!book;

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const supabase = (await import("@/lib/supabase/client")).createClient();
      if (isEdit) {
        const { error: updateError } = await supabase
          .from("books")
          .update({
            title: formData.title,
            author: formData.author,
            year: Number(formData.year),
            category: formData.category,
          })
          .eq("id", book!.id)
          .eq("user_id", userId);

        if (updateError) {
          setError(updateError.message);
        } else {
          router.push("/books");
        }
      } else {
        const { error: insertError } = await supabase.from("books").insert([
          {
            title: formData.title,
            author: formData.author,
            year: Number(formData.year),
            category: formData.category,
            user_id: userId,
          },
        ]);
        if (insertError) {
          setError(insertError.message);
        } else {
          router.push("/books");
        }
      }
    } catch {
      setError("Error saving book. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.title && formData.author && formData.year && formData.category;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter book title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author *</Label>
        <Input
          id="author"
          type="text"
          placeholder="Enter author name"
          value={formData.author}
          onChange={(e) => handleInputChange("author", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="year">Publication Year *</Label>
        <Input
          id="year"
          type="number"
          placeholder="Enter publication year"
          min="1000"
          max={new Date().getFullYear()}
          value={formData.year}
          onChange={(e) => handleInputChange("year", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category *</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => handleInputChange("category", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {error && <div className="text-sm text-red-500 text-center">{error}</div>}

      <div className="flex gap-4 pt-4">
        <Button
          type="submit"
          className="flex-1"
          disabled={!isFormValid || isSubmitting}
        >
          <Save className="mr-2 h-4 w-4" />
          {isSubmitting
            ? isEdit
              ? "Updating..."
              : "Saving..."
            : isEdit
            ? "Update Book"
            : "Save Book"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => window.history.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
