import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { TodoList } from "../components/TodoList/TodoList";
import { ToDo } from "../models/todo-item";

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
  };

  const updateToDo = (todoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const deleteToDo = (todoItem: ToDo) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoItem.id;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <Form createNewTODo={createNewTODo} />
      <TodoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
};
