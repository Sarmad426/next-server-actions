import { createTodo } from "@/lib/actions";
import React from "react";

const TodoForm = () => {
  return (
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
  );
};

export default TodoForm;
