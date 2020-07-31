import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton modifiers={["small", "success"]}>Hello world</PrimaryButton>
    <SecondaryButton modifiers={["large", "secondaryButtonWarning"]}>Yo world</SecondaryButton>
    <TertiaryButton modifiers={["small", "error"]}>Sup world</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
