import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { dataContext } from '../context/dataContext'
import { auth } from '../context/DataState'
import Chat from './chat/Chat'
import { Loader } from './loader/Loader'
import Login from './login/Login'

export const RouterComponent = () => {


   const [currentUser, loading] =useAuthState(auth)
   
 
   return (

      <>
         {/* {state.isRegister ? <Chat /> : <Login />} */}
     
         {currentUser ?
            <Switch>
               <Route path='/online_chat/chat/' component={Chat}></Route>
               <Redirect to='/online_chat/chat/' ></Redirect>
            </Switch>
            :
            <Switch>
               <Route path='/online_chat/login/' component={Login}></Route>
               <Redirect to='/online_chat/login/log'></Redirect>
            </Switch>
         }
      </>



   )
}


// {auth.currentUser ? 
//          <Switch>
//             <Route path='/chat/' component={Chat}></Route>
//             <Redirect to='/chat/' ></Redirect>
//          </Switch>
//          : 
//          <Switch>
//             <Route path='/login/' component={Login}></Route>
//              <Redirect to='/login/log'></Redirect> 
//          </Switch>