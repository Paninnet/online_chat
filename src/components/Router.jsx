import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { auth } from '../context/DataState'
import Chat from './chat/Chat'
import Login from './login/Login'

export const RouterComponent = () => {


   const [currentUser, loading] =useAuthState(auth)
   
 
   return (

      <>     
         {currentUser ?
            <Switch>
               <Route path='/online_chat/chat/'  component={Chat}></Route>
               <Redirect to='/online_chat/chat/' ></Redirect>
            </Switch>
            :
            <Switch>
               <Route path='/online_chat/'  component={Login}></Route>
               <Redirect to='/online_chat/'></Redirect>
            </Switch>
         }
      </>
   )
}
