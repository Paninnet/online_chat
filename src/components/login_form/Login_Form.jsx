import React from 'react';
import classes from './login_form.module.css'

const Login_Form = () => {
   return (
      <div className={classes.form_wrapper}>
         <div className={classes.form_content}>
            <div className={classes.register_info}>
               <input className={classes.register_item} type="text" placeholder="Email" />
               <input className={classes.register_item} type="text" placeholder="Your Password" />
            </div>
            <button className={classes.create}>Log In</button>
         </div>

      </div>
   );
};

export default Login_Form;