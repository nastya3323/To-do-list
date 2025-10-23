import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItemLink = styled(Link)<{ isDone: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isDone ? `green` : `red`)};
`;
