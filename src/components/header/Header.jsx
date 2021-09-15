import React from 'react'
import { NavLink } from 'react-router-dom';
import { login } from '../../App';
import classes from './Header.module.css'



const Header = () => {
   if (login) {
      return (
         <div className={classes.header_wrapper_chat}>
            <NavLink className={classes.nav_item} to='/login/log'>Log Out</NavLink>
         </div>
      );
   } else {
      return (
         <div className={classes.header_wrapper}>
            <div className={classes.items_wrapper}>
               <NavLink activeClassName={classes.nav_item_active} className={classes.nav_item} to='/login/create/'>Create New Account</NavLink>
               <NavLink activeClassName={classes.nav_item_active} className={classes.nav_item} to='/login/log'>Log In</NavLink>
            </div>
         </div>
      );
   }

};

export default Header;