import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListContainer, ToDoList } from "./ToDoList.styled";

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
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
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
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <ToDoListContainer>
      <ToDoList type="failed">
        {checkedList()}
        {/* <ToDoListItem toDoItem={todo1} /> */}
      </ToDoList>
      <ToDoList type="completed">
        {unCheckedList()}

        {/* <ToDoListItem toDoItem={todo2} /> */}

        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ToDoList>
    </ToDoListContainer>
  );
};
