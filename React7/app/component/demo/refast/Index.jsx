import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';

import Demo3 from './demo3/Index';
import Demo5 from './demo5/Index';
import Demo6 from './demo6/Index';
import Demo7 from './demo7/Index';

const Index = ({match}) => 
   <HashRouter> 
     <div> <div className="nav"> 
       <NavLink to='/ReFast/Demo3' activeClassName="selected" > Demo3 </NavLink>
       <NavLink to='/ReFast/Demo5' activeClassName="selected" > Demo5 </NavLink>
       <NavLink to='/ReFast/Demo6' activeClassName="selected" > Demo6 </NavLink>
       <NavLink to='/ReFast/Demo7' activeClassName="selected" > Demo7 </NavLink>
     </div>
     <Route exact path={`${match.url}`} render={()=>(<Redirect to={`${match.url}/demo3`} />)} />

     <Route path={`${match.url}/Demo3`} component={Demo3} />
     <Route path={`${match.url}/Demo5`} component={Demo5} />
     <Route path={`${match.url}/Demo6`} component={Demo6} />
     <Route path={`${match.url}/Demo7`} component={Demo7} />
      </div>
   </HashRouter>

export default Index;