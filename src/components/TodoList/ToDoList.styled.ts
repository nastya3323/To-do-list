import styled from "styled-components";

export const ToDoListContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

export const ToDoList = styled.ul<{ type: string }>`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;

  ${(props) =>
    props.type === "failed" &&
    `
    &:after {
      width: 100%;
      display: block;
      text-align: center;
      font-size: 12px;
      color: #aaa;
    }

    &:empty:after {
      content: 'Нет задач на выполнение';
    }
    `}

  ${(props) =>
    props.type === "completed" &&
    `
    {
      position: relative;
      padding: 60px 0 0 0;

        &:before {
          content: '';
          width: 150px;
          height: 1px;
          background: #d8e5e0;

          position: absolute;
          top: 25px;
          left: calc(50% - 75px);
        }

        &:after {
          width: 100%;
          display: block;
          text-align: center;
          font-size: 12px;
          color: #aaa;
        }

        &:empty:after {
          content: 'Нет выполненных задач';
        }
    }
        `}
`;
