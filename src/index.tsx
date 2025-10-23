import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
