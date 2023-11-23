import { createTodo } from "@/lib/actions";
import prisma from "@/lib/prismadb";
import { Todo } from "@prisma/client";

const getTodo = async () => {
  const data = await prisma.todo.findMany();
  return data;
};
export default async function Home() {
  const todos: Todo[] = await getTodo();
  return (
    <main className="flex my-24 flex-col items-center justify-between p-24 text-white">
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
      <h2 className="text-2xl font-bold">Todos</h2>
      <div className="flex items-center justify-normal gap-4">
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </main>
  );
}
