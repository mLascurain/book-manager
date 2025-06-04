"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTransition, useState } from "react";
import { deleteBook } from "@/app/books/[id]/delete/action";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Book {
  id: string | number;
  title: string;
  author: string;
  year: string | number;
  category: string;
}

export function BookCard({ book }: { book: Book }) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleDelete = (formData: FormData) => {
    startTransition(() => {
      deleteBook(formData);
    });
  };

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle
            className="text-lg leading-tight truncate max-w-[10rem] sm:max-w-[14rem] md:max-w-[18rem]"
            title={book.title}
          >
            {book.title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {book.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <div className="space-y-2">
          <p
            className="text-sm font-medium text-muted-foreground truncate max-w-[10rem] sm:max-w-[14rem] md:max-w-[18rem]"
            title={book.author}
          >
            by {book.author}
          </p>
          <p className="text-sm text-muted-foreground">
            Published: {book.year}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-3">
        <Link href={`/books/${book.id}/edit`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </Link>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-destructive hover:bg-destructive hover:text-destructive-foreground"
              type="button"
              aria-disabled={isPending}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Book</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete{" "}
                <span className="font-semibold">{book.title}</span>? This action
                cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <form
              action={handleDelete}
              className="w-full"
              onSubmit={() => setOpen(false)}
            >
              <input type="hidden" name="bookId" value={book.id} />
              <DialogFooter className="gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  variant="destructive"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>Delete</>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
