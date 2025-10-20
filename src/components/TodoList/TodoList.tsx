import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";

export const TodoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => {
        return !item.isDone;
      })
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={index}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };
  const unCheckedList = () => {
    return props.todos
      .filter((item) => {
        return item.isDone;
      })
      .map((item, index) => {
        return (
          <ToDoListItem 
            toDoItem={item}
            key={index}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList()}
        {/* <ToDoListItem toDoItem={todo1} /> */}
      </ul>
      <ul className="todo-list completed">
        {unCheckedList()}

        {/* <ToDoListItem toDoItem={todo2} /> */}

        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
