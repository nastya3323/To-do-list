import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearText, setText } from "../../feature/formSlice";
import {
  FormWrapper,
  FormBlock,
  FormLabel,
  FormField,
  FormControl,
} from "./Form.styled";

import plusIcon from "../../assets/images/plus.png";

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
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            value={text}
            type="text"
            onChange={(e) => dispatch(setText(e.target.value))}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
