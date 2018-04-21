import React from "react";
import { HashRouter, Route, NavLink, Redirect } from "react-router-dom";
import { Bundle, BundleFun } from "../common/Bundle";
import Demo1 from "../demo/demo1/Demo1.bundle";
import Demo2 from "../demo/demo2/Demo2.bundle";
import Demo3 from '../demo/demo3/Index';
import Demo5 from '../demo/demo5/Index';
import Demo6 from '../demo/demo6/Index';
import Demo7 from '../demo/demo7/Index';

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
        <NavLink to="/Demo3" activeClassName="selected">
          demo3
        </NavLink>
        <NavLink to="/Demo5" activeClassName="selected">
          demo5
        </NavLink>
        <NavLink to="/Demo6" activeClassName="selected">
          demo6
        </NavLink>
        <NavLink to="/Demo7" activeClassName="selected">
          demo7
        </NavLink>
      </div>
      <Route exact path="/" render={() => <Redirect to="/Demo1" />} />
   
      <Route path="/Demo1" component={() => BundleFun(Demo1)} />
      <Route path="/Demo2" component={props => BundleFun(Demo2, props)} />
      <Route path="/Demo3" component={Demo3} />
      <Route path="/Demo5" component={Demo5} />
      <Route path="/Demo6" component={Demo6} />
      <Route path="/Demo7" component={Demo7} />
    </div>
  </HashRouter>
);

export default Index;
