import { DeleteForm } from "@/components/delete-form";
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
      <h2 className="text-2xl font-bold my-5">Todos</h2>
      <div className="flex flex-col items-center justify-normal gap-4 my-12">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span className="peer-checked:line-through">{todo.title}</span>
              <DeleteForm id={todo.id} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
