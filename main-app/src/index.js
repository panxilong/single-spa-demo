import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerApplication, start } from "single-spa";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
async function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

registerApplication(
  "vue-child-app",
  async () => {
    await loadScript("http://localhost:3002/js/chunk-vendors.js");
    await loadScript("http://localhost:3002/js/app.js");
    // @ts-ignore
    return window.singleVue;
  },
  (location) => location.pathname.startsWith("/vue")
);

registerApplication(
  "react",
  async () => {
    await loadScript("http://localhost:3001/static/js/bundle.js");
    // @ts-ignore
    return window.singleReact;
  },
  (location) => location.pathname.startsWith("/react")
);

start();
