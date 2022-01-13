import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import singleSpaReact from "single-spa-react";
// @ts-ignore
if (!window.singleSpaNavigate) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

function domElementGetter() {
  return document.getElementById("react");
}

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
});

export const bootstrap = reactLifeCycles.bootstrap;
export const mount = reactLifeCycles.mount;
export const unmount = reactLifeCycles.unmount;
