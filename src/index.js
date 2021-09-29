console.log("index.js starting");
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.scss";
import "./forms.scss";

const wrapper = document.getElementById("container");
ReactDOM.render(<App />, wrapper);
