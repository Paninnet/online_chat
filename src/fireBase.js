import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE5xkXtHzNr59QfWdCAhUwp2nHjKxmGeQ",
  authDomain: "onlinechat-bcf87.firebaseapp.com",
  projectId: "onlinechat-bcf87",
  storageBucket: "onlinechat-bcf87.appspot.com",
  messagingSenderId: "969077488359",
  appId: "1:969077488359:web:768037791dd46347da8042"
};

// Initialize Firebase
export const Fire = initializeApp(firebaseConfig);