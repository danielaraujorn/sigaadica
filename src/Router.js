import React from "react";
import Search from "./Components/Search";
import Results from "./Components/Results";
import Disciplina from "./Components/Disciplina";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import rotas from "./rotas";
const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Search history={history} />
              <Results history={history} />
            </>
          )}
        />
        <Route path="/disciplina/:id" component={Disciplina} />
        {rotas.map(({ path, component, name }) => (
          <Route key={name} exact path={path} component={component} />
        ))}
      </>
    </Router>
  );
};
