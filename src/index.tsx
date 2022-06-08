import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextProvider } from "./context/globalContext";
import "./globalStyles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
