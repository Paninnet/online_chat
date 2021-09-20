import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { dataContext } from '../../context/dataContext';
import { app, auth, firestore } from '../../context/DataState';
import classes from './Chat.module.css'
import { Loader } from '../loader/Loader';

const Chat = () => {


   const [currentUser, loading] = useAuthState(auth)
   const { state, changeInputChat, sendMessage } = useContext(dataContext)


   
   if (loading) {
      return <Loader />
   }
   return (
      <div>
         {currentUser ? <div className={classes.user_email}>Your email: <span className={classes.email_span}>{currentUser.email}</span></div> : <div></div>}
         <div className={classes.message_wrapper}>


         </div>
         <div className={classes.inputWrapper}>
            <input onChange={(e) => changeInputChat(e.target.value)} value={state.inputChat} className={classes.input} type="text" placeholder="Your message:" />
            <button onClick={() => sendMessage()} className={classes.btn}>Send</button>
         </div>


      </div>
   );
};

export default Chat;