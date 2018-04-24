import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import ReFlux1 from './reflux1/Index';

const Index = ({match}) => 
      <HashRouter >
       <div> 
         <div className="nav">
            <NavLink to="/ReFlux/ReFlux1" activeClassName="selected" > ReFlux1 </NavLink>
         </div>
         <Route exact path={`${match.url}`}
           render={() => (<Redirect to={`${match.url}/ReFlux1`}/>)}
         />
         <Route path={`${match.url}/ReFlux1`}  component={ReFlux1} />
        </div>
      </HashRouter>


export default Index;