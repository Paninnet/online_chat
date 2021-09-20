import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { dataContext } from '../context/dataContext'
import { auth, DataState } from '../context/DataState'
import Chat from './chat/Chat'
import Header from './header/Header'
import { Loader } from './loader/Loader'
import Login from './login/Login'
import { RouterComponent } from './Router'


export const AppWrapper = () => {

   const [currentUser, loading] = useAuthState(auth)

   if (loading) {
      return (
         <Loader />
      )
   } else {
      return (
         <>
            <BrowserRouter>
               <DataState>
                  <Header />
                  <RouterComponent />
               </DataState>
            </BrowserRouter >
         </>
      )
   }
}