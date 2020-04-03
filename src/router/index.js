import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Login} from "../pages/login";
import {HomeIndex} from "../pages/home";

export default function RouterIndex(){
    return (<Switch>
        <Route path='/' exact render = {()=> (<Redirect to='/login'/>)}/>
        <Route path='/login' component={Login}/>
        <Route path='/home'  component={HomeIndex}/>
    </Switch>)
}
