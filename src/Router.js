import React from "react";
import { Switch, Route } from "react-router-dom";
import MoviesList from "./containers/MoviesList/MoviesList";
import MovieDetails from "./containers/MovieDetails/MovieDetails";

const Router = props => (
  <Switch>
    <Route exact path="/" component={MoviesList} />
    <Route path="/details/:id" component={MovieDetails} />
  </Switch>
);

export default Router;
