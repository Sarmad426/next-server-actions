import { DeleteForm } from "@/components/delete-form";
import TodoForm from "@/components/todo-form";
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
      <TodoForm />
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
