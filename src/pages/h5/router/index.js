import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import H5All from "../pages/h5All";
import H5MyArt from "../pages/h5MyArt";
import H5MyData from "../pages/h5MyData";
import H5Detail from "../pages/h5Detail";

export default function H5Router(){
    return (<Switch>
        <Route path='/home/h5' exact render = {()=> (<Redirect to='/home/h5/all'/>)}/>
        <Route path='/home/h5/all' component={H5All}/>
        <Route path='/home/h5/myArt' component={H5MyArt}/>
        <Route path='/home/h5/myData' component={H5MyData}/>
        <Route path='/home/h5/detail' component={H5Detail}/>
    </Switch>)
}
