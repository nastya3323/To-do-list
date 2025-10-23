import { ToDo } from "../../models/todo-item";
import { ListItemLink } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemLink isDone={todo.isDone} to={`/list/${todo.id}`}>
      {todo.text}
    </ListItemLink>
  );
};
