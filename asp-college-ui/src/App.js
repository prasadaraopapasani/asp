import {Route, Switch} from 'react-router-dom'
import React from 'react'
import { Home } from './components/homepage/Home'
import { Login } from './components/loginpage/Login'
import { Register } from './components/registerpage/Register'
import { NavigtaionMenu } from './components/layout/NavigationMenu'

export const App =()=>{
    return (
        <div>
            <NavigtaionMenu/>
         <Switch>
          <Route path="/" exact>
              <Home></Home>
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>
          </Switch>
       
        </div>
    );
}