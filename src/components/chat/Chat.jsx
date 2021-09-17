import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { dataContext } from '../../context/dataContext';
import { app, auth, firestore } from '../../context/DataState';
import classes from './Chat.module.css'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Loader } from '../loader/Loader';

import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { collection, getDocs, } from "firebase/firestore";
import { useEffect } from 'react/cjs/react.development';
debugger



// const unsub = getDoc(doc(firestore, "message", "new-message-id"), (doc) => {
//     console.log("Current data: ", doc.data());
// });





const Chat = () => {

   // const [message] = useCollectionData(
   //    firestore.collection('messages').orderBy('createdAt')
   // )
   // console.log(message);


   const [currentUser, loading] = useAuthState(auth)
   const { state, changeInputChat, sendMessage } = useContext(dataContext)


   useEffect(() => {

      (function async () {
          console.log(get())
      }())


      // get()



   }, [])

   const get = async () => {
      const data = []
      const querySnapshot = await getDocs(collection(firestore, "message"));
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         data.push(doc.data())
         console.log(doc.id, " => ", doc.data());
      });
      return data
   }










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