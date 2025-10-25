import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/todoList";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";
import formReducer from "./feature/formSlice";
import themeReducer from "./feature/themeList";

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    form: formReducer,
    themeList: themeReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
