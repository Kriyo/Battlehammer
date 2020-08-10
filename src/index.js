import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Dashboard, Home } from "./views";
import { GlobalStyle } from "./utils";

const App = () => {
  const [activeGame, setActiveGame] = useState(false);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return activeGame ? <Redirect to='/dashboard' /> : <Redirect to='/home' />;
          }}
        />
        <Route exact path='/home' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
