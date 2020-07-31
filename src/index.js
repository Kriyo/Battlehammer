import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";

const App = () => (
  <div>
    <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Yo world</SecondaryButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
