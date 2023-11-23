"use client";

import { deleteTodo } from "@/lib/actions";
import { Trash } from "lucide-react";

export function DeleteForm({ id, title }: { id: string; title: string }) {
  return (
    <button onClick={() => deleteTodo(id)}>
      <Trash />
    </button>
  );
}
