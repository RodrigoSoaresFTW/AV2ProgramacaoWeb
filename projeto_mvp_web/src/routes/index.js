import React, { createElement } from 'react'
import {BrowserRouter, Switch} from 'react-router-dom';
import Route from './Route';

import About from '../pages/About';
import Chat  from '../pages/Chat';
import Home from '../pages/Home';
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
import CreateUser from '../pages/CreateUser'



const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route component={About} path="/about" isPrivate/>
                <Route component={Chat} path="/chat" isPrivate/>
                <Route component={Home} path="/" exact isPrivate/>
                <Route component={Home} path="/main" isPrivate/>
                <Route component={Login} path="/login"/>
                <Route component={Page404} path="*" isPrivate/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;