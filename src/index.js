import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_jap from "./translations/jap/common.json";

i18next.init({
  //used for translation of strings
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "jap", // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    jap: {
      common: common_jap
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
