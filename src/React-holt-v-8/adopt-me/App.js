// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

// modify the createRoot call, delete "ReactDOM"
const root = createRoot(container);

// const Pet = () => {
//     return React.createElement('div', {}, [
//         React.createElement('h1',{},'Luna'),
//         React.createElement('h2',{},'Dag'),
//         React.createElement('h2',{},'Hab')
//     ])
// }
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// const App = () => {return React.createElement(taghtml, {} ò null, children (que puede ser otro tag, o el contenido literal, directamente))}
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    //   React.createElement(Pet),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Elen",
      animal: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Marta",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};

//aqui estamos enchufando nuestro app al html
const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
