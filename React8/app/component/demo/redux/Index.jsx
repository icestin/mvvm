import React from 'react';
import {HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import Redux1 from './redux1/Index';

const Index = ({match}) => 
   <HashRouter>
       <div> 
           <div className="nav"> 
              <NavLink to='/Redux/Redux1' activeClassName="selected"> Redux1</NavLink>
         
           </div>
           <Route exact path={`${match.url}`} render={() => (<Redirect to={`${match.url}/Redux1`}/>)} />
           <Route path={`${match.url}/Redux1`} component={Redux1} />

       </div>
    </HashRouter>
    
export default Index;