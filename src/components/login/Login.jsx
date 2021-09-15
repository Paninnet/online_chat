import React from 'react';
import { Route, Switch,Redirect } from 'react-router';
import Create_Account from '../login_form/Create_Account'
import Login_Form from '../login_form/Login_Form';
import classes from './Login.module.css'

const Login = () => {
   return (
      <div className={classes.log_wrapper}>
         <Switch>
            <Route path='/login/create/' component={Create_Account}></Route>
            <Route path='/login/log/' component={Login_Form} ></Route>
            <Redirect to='/login/log/'></Redirect>
         </Switch>
      </div>
   );
};

export default Login;