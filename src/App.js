import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Tv from "./components/Tv";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/tv/:id">
            <Tv />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
