import React, { useReducer } from "react";
import { dataContext } from "./dataContext";
import { CHAT_INPUT_CHANGE, dataReducer, DATA_FETCHING, IS_FETCHING, ON_EMAIL_CHANGE_CREATE, ON_EMAIL_CHANGE_LOGIN, ON_INPUT_SEND, ON_LAST_NAME_CHANGE_CREATE, ON_NAME_CHANGE_CREATE, ON_PASSWORD_CHANGE_CREATE, ON_PASSWORD_CHANGE_LOGIN, ON_SEND_FORM_CREATE, ON_SEND_FORM_LOGIN, SING_IN, SING_OUT, WRONG_DATA, WRONG_DATAE, WRONG_DATAL, WRONG_DATAN, WRONG_DATAP } from "./dataReducer";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, addDoc, Timestamp, getDoc, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";


const firebaseConfig = {
   apiKey: "AIzaSyDE5xkXtHzNr59QfWdCAhUwp2nHjKxmGeQ",
   authDomain: "onlinechat-bcf87.firebaseapp.com",
   projectId: "onlinechat-bcf87",
   storageBucket: "onlinechat-bcf87.appspot.com",
   messagingSenderId: "969077488359",
   appId: "1:969077488359:web:768037791dd46347da8042"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore()



export const DataState = ({ children }) => {

   const initialState = {

      isFetching: false,

      isRegister: false,

      emailLog: "",
      passwordLog: "",

      nameCreate: "",
      lastNameCreate: "",
      emailCreate: "",
      passwordCreate: "",

      inputChat: "",

      wrongName: false,
      wronLastName: false,
      wrongEmail: false,
      wrongPassword: false,

      dataMessage: []


   }





   const [state, dispatch] = useReducer(dataReducer, initialState)

   const fetchig = () => {
      dispatch({ type: IS_FETCHING })
   }

   const nameChangeCreate = (nameValue) => {
      dispatch({ type: ON_NAME_CHANGE_CREATE, nameValue, wrongName: false })
   }
   const LastNameChangeCreate = (lastNameValue) => {
      dispatch({ type: ON_LAST_NAME_CHANGE_CREATE, lastNameValue, wronLastName: false })
   }
   const emailChangeCreate = (emailValue) => {
      dispatch({ type: ON_EMAIL_CHANGE_CREATE, emailValue, wrongEmail: false })
   }
   const passwordChangeCreate = (passwordValue) => {
      dispatch({ type: ON_PASSWORD_CHANGE_CREATE, passwordValue, wrongPassword: false })
   }
   const sendDataCreate = async (nameValue = "", lastNameValue = "", emailValue = "", passwordValue = "") => {
      // console.log(auth);
      const data = {
         name: state.nameCreate,
         lastName: state.lastNameCreate,
         email: state.emailCreate,
         password: state.passwordCreate
      }
      if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(state.nameCreate)
         && /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(state.lastNameCreate)
         && /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(state.emailCreate)
         && state.passwordCreate.length > 6) {
         fetchig()
         debugger
         await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
               // console.log(auth);
               dispatch({
                  type: ON_SEND_FORM_CREATE, nameValue,
                  lastNameValue,
                  emailValue,
                  passwordValue,
                  isRegister: true,
                  wrongName: false,
                  wronLastName: false,
                  wrongEmail: false,
                  wrongPassword: false
               })

            })
            .catch(error => alert(error.message))




      } if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(state.nameCreate) === false) {
         dispatch({ type: WRONG_DATAN, wrongName: true })
      } if (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(state.lastNameCreate) === false) {
         dispatch({ type: WRONG_DATAL, wronLastName: true })
      } if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(state.emailCreate)) {
         dispatch({ type: WRONG_DATAE, wrongEmail: true })
      } if (state.passwordCreate.length < 6) {
         dispatch({ type: WRONG_DATAP, wrongPassword: true })
      }

   }

   const singIN = async () => {
      await signInWithEmailAndPassword(state.emailLog, state.passwordLog)
         .then(() => {
            dispatch({ type: SING_IN, isRegister: true })
         })

   }

   const changeInputChat = (inputChat) => {
      dispatch({ type: CHAT_INPUT_CHANGE, inputChat })
   }

   const sendMessage = async () => {
      const docRef = await addDoc(collection(firestore, "message"), {
         user: auth.currentUser.email,
         text: state.inputChat,
         timestamp: serverTimestamp()
      });
      // setDoc(doc(db, "cities", "new-city-id"), data);
      console.log(state.inputChat);
      dispatch({ type: ON_INPUT_SEND, inputChat: "" })
   }

   const singOUT = async () => {

      dispatch({ type: SING_OUT, isRegister: false })
      await auth.signOut()
   }


   const emailChangeLOGIN = (emailValueLog) => {
      dispatch({ type: ON_EMAIL_CHANGE_LOGIN, emailValueLog, wrongEmail: false })
   }
   const passwodChangeLOGIN = (passwordValueLog) => {
      dispatch({ type: ON_PASSWORD_CHANGE_LOGIN, passwordValueLog, wrongPassword: false })
   }
   const sendDataLOGIN = async (emailLog = "", passwordLog = "") => {
      debugger
      const dataLOGIN = {
         email: state.emailLog,
         password: state.passwordLog
      }
      try {
         await signInWithEmailAndPassword(auth, dataLOGIN.email, dataLOGIN.password)
            .then(() => {
               dispatch({ type: ON_SEND_FORM_LOGIN, emailLog, passwordLog, isRegister: true })
            })

      } catch (error) {
         console.log(error.message);
         switch (error.message) {
            case 'Firebase: Error (auth/invalid-email).':
               dispatch({ type: WRONG_DATAE, wrongEmail: true })
            case 'Firebase: Error (auth/user-not-found).':
               dispatch({ type: WRONG_DATAE, wrongEmail: true })
               dispatch({ type: WRONG_DATAP, wrongPassword: true })
            case 'Firebase: Error (auth/internal-error).':
               dispatch({ type: WRONG_DATAP, wrongPassword: true })
            case 'Firebase: Error (auth/wrong-password).':
               dispatch({ type: WRONG_DATAP, wrongPassword: true })
               break
            default:
               break;
         }
      }
   }

   return (
      <dataContext.Provider value={{ state, nameChangeCreate, LastNameChangeCreate, emailChangeCreate, passwordChangeCreate, sendDataCreate, emailChangeLOGIN, passwodChangeLOGIN, sendDataLOGIN, singOUT, singIN, changeInputChat, sendMessage }}>
         {children}
      </dataContext.Provider>
   )
}

