import React from 'react';
import { Route, Switch,Redirect } from 'react-router';
import Create_Account from '../login_form/Create_Account'
import Login_Form from '../login_form/Login_Form';
import classes from './Login.module.css'

const Login = () => {
   return (
      <div className={classes.log_wrapper}>
         <Switch>
            <Route path='/online_chat/login/create/'  component={Create_Account}></Route>
            <Route path='/online_chat/'   component={Login_Form} ></Route>
         </Switch>
      </div>
   );
};

export default Login;