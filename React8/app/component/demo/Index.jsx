import React from "react";
import { HashRouter, Route, NavLink, Redirect } from "react-router-dom";
import { Bundle, BundleFun } from "../common/Bundle";
import Router from './router/Index';
import Refast from './refast/Index';
import Flux from './flux/Index';
import ReFlux from './reflux/Index';
import Redux from './redux/Index';

import "../../../public/css/demo.pcss";

const Index = () => (
  <HashRouter>
    <div className="content">
       <div className='nav'> 
          <NavLink to='/Router' activeClassName='selected' >Router </NavLink>
          <NavLink to='/ReFast' activeClassName='selected' >ReFast </NavLink>
          <NavLink to='/Flux' activeClassName='selected' >Flux </NavLink>
          <NavLink to='/ReFlux' activeClassName='selected' >ReFlux </NavLink>
          <NavLink to='/Redux' activeClassName='selected' >Redux </NavLink>
       </div>
       <br/>
       <Route path='/Router' component={Router} />
       <Route path='/Refast' component={Refast} />
       <Route path='/Flux' component={Flux} />
       <Route path='/ReFlux' component={ReFlux} />
       <Route path='/Redux' component={Redux} />
    </div>
  </HashRouter>
);

export default Index;
