import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "Four Cheese Pizza",
      description: "The best cheese pizza ever",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
