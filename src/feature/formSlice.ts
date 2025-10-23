import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// типы для состояния формы
interface FormState {
  text: string;
}

//  начальное состояние
const initialState: FormState = {
  text: "",
};

// создание slice
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // action для установки текста (вызов при onChange)
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },

    // action для очистки текста (вызов после submit)
    clearText: (state) => {
      state.text = "";
    },
  },
});

export const { setText, clearText } = formSlice.actions;

export default formSlice.reducer;
