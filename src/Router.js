import React from "react";
import Search from "./Components/Search";
import Results from "./Components/Results";
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
