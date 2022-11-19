import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Home, Login, Register, SignUp } from "./components";
const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
