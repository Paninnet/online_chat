import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';


export const login = false

function App() {

  return (
    <BrowserRouter>
      <Header />
      {login ?
        (<Switch>
          <Route path='/chat' exact={true} component={Chat}></Route>
          <Redirect to='/chat'></Redirect>
        </Switch>)
        :
        (<Switch>
          <Route path='/login' component={Login}></Route>
          <Redirect to='/login'></Redirect>
        </Switch>)
      }
    </BrowserRouter >
  )
}

export default App;
