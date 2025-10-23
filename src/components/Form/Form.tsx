import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearText, setText } from "../../feature/formSlice";

export const Form = (props: { createNewToDo: Function }) => {
  // читаем текст из store
  const text = useSelector((state: RootState) => state.form.text);
  const dispatch = useDispatch();

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (text) {
      props.createNewToDo(text);
      dispatch(clearText());
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e) => dispatch(setText(e.target.value))}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
