import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";

import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext'
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={configureStore({})}>
  {/* <Provider store={store}> */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </Provider>
);
