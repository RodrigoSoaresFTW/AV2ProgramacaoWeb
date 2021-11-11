import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom';
import Route from './Route';

import About from '../pages/About';
import Chat  from '../pages/Chat';
import Home from '../pages/Home';
import Login from '../pages/Login'
import Page404 from '../pages/Page404'



const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route component={About} path="/about" />
                <Route component={Chat} path="/chat" />
                <Route component={Home} path="/" exact/>
                <Route component={Home} path="/main" />
                <Route component={Login} path="/login"/>
                <Route component={Page404} path="*"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;