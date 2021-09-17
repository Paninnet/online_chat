import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { dataContext } from '../../context/dataContext';
import classes from './login_form.module.css'


const Create_Account = () => {
   const {state,nameChangeCreate,LastNameChangeCreate,emailChangeCreate,passwordChangeCreate,sendDataCreate} = useContext(dataContext)
   return (
      <div className={classes.form_wrapper}>
         <div className={classes.form_content}>
            <div className={classes.fio}>
               <input onChange={e=>nameChangeCreate(e.target.value)} value={state.nameCreate} className={state.wrongName ? classes.fio_item_wrong:classes.fio_item} type="text" placeholder="First Name" />
               <input onChange={e=>LastNameChangeCreate(e.target.value)} value={state.lastNameCreate} className={state.wronLastName ? classes.fio_item_wrong:classes.fio_item} type="text" placeholder="Last Name" />
            </div>
            <div className={classes.register_info}>
               <input onChange={e=>emailChangeCreate(e.target.value)} value={state.emailCreate} className={state.wrongEmail ? classes.register_item_wrong: classes.register_item} type="text" placeholder="Email" />
               <input onChange={e=>passwordChangeCreate(e.target.value)} value={state.passwordCreate} className={state.wrongPassword ? classes.register_item_wrong : classes.register_item} type="text" placeholder="Your Password" />
            </div>
            <button onClick={()=>sendDataCreate()} className={classes.create}>Create Account</button>
         </div>

      </div>
   );
};

export default Create_Account;