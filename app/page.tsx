import { createTodo } from "@/lib/actions";
import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";

const getTodo = async () => {
  const data = await prisma.todo.findMany();
  return data;
};
export default async function Home() {
  const data: Todo[] = await getTodo();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <form
        action={createTodo}
        className="flex items-center justify-center gap-x-5"
      >
        <input
          type="text"
          className="text-black w-[18rem] h-[2.3rem]"
          name="title"
          required
        />
        <button className="bg-white text-black p-3 rounded-md hover:bg-gray-100">
          Submit
        </button>
      </form>
    </main>
  );
}
