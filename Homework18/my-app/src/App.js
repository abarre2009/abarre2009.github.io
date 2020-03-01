import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./components/home";
import about from "./components/about";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={home} />,
          <Route exact path="/about" component={about} />,
        </Switch>
      </div>
    </Router>
  );
}

export default App;
