import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { login } from '../../App';
import { dataContext } from '../../context/dataContext';
import { auth } from '../../context/DataState';
import classes from './Header.module.css'



const Header = () => {
   const {state,singOUT} = useContext(dataContext)

   const [currentUser] =useAuthState(auth)
   if (currentUser) {
      return (
         <div className={classes.header_wrapper_chat}>
            <NavLink onClick={() => singOUT()} className={classes.nav_item} to='/online_chat/'>Log Out</NavLink>
         </div>
      );
   } else {
      return (
         <div className={classes.header_wrapper}>
            <div className={classes.items_wrapper}>
               <NavLink activeClassName={classes.nav_item_active} className={classes.nav_item} to='/online_chat/login/create/'>Create New Account</NavLink>
               <NavLink activeClassName={classes.nav_item_active} className={classes.nav_item} exact to='/online_chat/'>Log In</NavLink>
            </div>
         </div>
      );
   }

};

export default Header;