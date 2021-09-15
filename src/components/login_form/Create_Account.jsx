import React from 'react';
import classes from './login_form.module.css'

const Create_Account = () => {
   return (
      <div className={classes.form_wrapper}>
         <div className={classes.form_content}>
            <div className={classes.fio}>
               <input className={classes.fio_item} type="text" placeholder="First Name" />
               <input className={classes.fio_item}m type="text" placeholder="Last Name" />
            </div>
            <div className={classes.register_info}>
               <input className={classes.register_item} type="text" placeholder="Email" />
               <input className={classes.register_item} type="text" placeholder="Your Password" />
            </div>
            <button className={classes.create}>Create Account</button>
         </div>

      </div>
   );
};

export default Create_Account;