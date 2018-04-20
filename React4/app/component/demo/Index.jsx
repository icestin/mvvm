import React from "react";
import { HashRouter, Route, NavLink, Redirect } from "react-router-dom";
import { Bundle, BundleFun } from "../common/Bundle";
import Demo1 from "../demo/demo1/Demo1.bundle";
import Demo2 from "../demo/demo2/Demo2.bundle";
import "../../../public/css/demo.pcss";

const Index = () => (
  <HashRouter>
    <div className="content">
      <div className="nav">
        <NavLink to="/Demo1" activeClassName="selected" exact>
          demo1
        </NavLink>
        <NavLink to="/Demo2" activeClassName="selected">
          demo2
        </NavLink>
      </div>
      <Route exact path="/" render={() => <Redirect to="/Demo1" />} />
      <Route path="/Demo1" component={() => BundleFun(Demo1)} />
      <Route path="/Demo2" component={props => BundleFun(Demo2, props)} />
    </div>
  </HashRouter>
);

export default Index;
