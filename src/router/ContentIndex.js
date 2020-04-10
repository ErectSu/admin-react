import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Editor from "../pages/editor";
import Index from "../pages/index";
import MarkDown from "../pages/markdown";

export default function ContentIndex(){
    return (<Switch>
        <Route path='/home' exact render = {()=> (<Redirect to='/home/index'/>)}/>
        <Route path='/home/index' component={Index}/>
        <Route path='/home/editor'  component={Editor}/>
        <Route path='/home/markdown'  component={MarkDown}/>
    </Switch>)
}
