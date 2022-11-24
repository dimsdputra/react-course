import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDoList from "./ToDoList";
// import App from './App';
// import ListArray from './ListArray';
// import Ternary from './Ternary';
// import UseState from './UseState';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ternary/> */}
    {/* <ListArray/> */}
    {/* <UseState/> */}
    <ToDoList />
  </React.StrictMode>
);
