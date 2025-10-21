import { useState } from "react";
import { Form } from "../components/Form/Form";
import { TodoList } from "../components/TodoList/TodoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer, toast } from "react-toastify";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 0,
      text: "Первая задача",
      isDone: false,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: true,
    },
  ]);

  const createNewTODo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
    toast.info("Задача создана!", {
      position: "bottom-right",
    });
  };

  const updateToDo = (todoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    setTodos(newTodos);
    toast.warn("Статус задачи обновлен", {
      position: "bottom-right",
    });
  };

  const deleteToDo = (todoItem: ToDo) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoItem.id;
    });

    setTodos(newTodos);
    toast.success("Задача удалена. Прощай...", {
      position: "bottom-right",
    });
  };

  return (
    <>
      <Form createNewTODo={createNewTODo} />
      <TodoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer position="bottom-right" />
    </>
  );
};
