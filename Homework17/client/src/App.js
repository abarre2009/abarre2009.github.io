import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Datastore from "./pages/Datastore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello employee directory App </h1>
      </header>
      <Datastore />
    </div>
  );
}

export default App;
