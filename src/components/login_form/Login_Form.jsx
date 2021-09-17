import React, { useContext } from 'react';
import { dataContext } from '../../context/dataContext';
import classes from './login_form.module.css'

const Login_Form = () => {

   const {state,emailChangeLOGIN,passwodChangeLOGIN,sendDataLOGIN} = useContext(dataContext)
   return (
      <div className={classes.form_wrapper}>
         <div className={classes.form_content}>
            <div className={classes.register_info}>
               <input className={state.wrongEmail ? classes.register_item_wrong : classes.register_item} onChange={(e) => emailChangeLOGIN(e.target.value) } value={state.emailLog} type="text" placeholder="Email" />
               <input className={ state.wrongPassword ? classes.register_item_wrong  :classes.register_item} onChange={(e) => passwodChangeLOGIN(e.target.value)} value = {state.passwordLog} type="text" placeholder="Your Password" />
            </div>
            {state.wrongEmail || state.wrongPassword ? <div className={classes.register_block_wrong}> Wrong Email or Password</div> : <div></div>}
            <button onClick={() => sendDataLOGIN()} className={classes.create}>Log In</button>
         </div>

      </div>
   );
};

export default Login_Form;