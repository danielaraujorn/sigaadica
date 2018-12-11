import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <>
        <Search history={history} />
        <Route path="/search" component={Results} />
      </>
    </Router>
  );
};
