import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';
import { app, DataState } from './context/DataState';
import { useContext, useEffect } from 'react';
import { dataContext } from './context/dataContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AppWrapper } from './components/AppWrapper';






function App() {

  return (
    <AppWrapper/>
  )
}

export default App;
