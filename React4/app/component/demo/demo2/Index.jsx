import React from 'react';
import TodoList from './TodoList';
import {Route, NavLink, Redirect} from 'react-router-dom';

const Index = ({match}) => 
<div> 
           <div className='nav'>
               <NavLink to={`${match.url}/demo2-1`} activeClassName="selected" exact >demo2-1</NavLink>
               <NavLink to={`${match.url}/demo2-2`} activeClassName="selected" exact >demo2-2</NavLink>
            </div>
            <Route exact path = "/demo2" render={() => (<Redirect to='/demo2/demo2-1' />)} />
            <Route path="/demo2/demo2-1" component= {TodoList}/>
            <Route path="/demo2/demo2-2" component= {TodoList}/>
     </div>



export default Index;