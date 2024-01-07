import { createContext } from "react";
import {initializeApp} from "firebase/app"
import {createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword} from "firebase/auth"
import { getDatabase, ref, set} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyAsZuoLbMBj7OIUbcF6grX_7SzPaH4wm_I",
    authDomain: "news-62fb2.firebaseapp.com",
    projectId: "news-62fb2",
    storageBucket: "news-62fb2.appspot.com",
    messagingSenderId: "382352940952",
    appId: "1:382352940952:web:eda0ccd6b5b597286d15ed",
    dataUrl: "https://news-62fb2-default-rtdb.firebaseio.com/"
  };
const firebaseApp = initializeApp(firebaseConfig)
export const CreatContext = createContext(null)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)
export const DataProvider =(props)=>{
    const singUpEmailandPass = (email, password)=>{
       return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    const SingIn = (email, password)=>{
            signInWithEmailAndPassword(firebaseAuth, email, password)
    }
    const putData =(key, data)=> set(ref(database, key), data)
    return(
        <CreatContext.Provider value={{singUpEmailandPass, putData, SingIn}}>
            {props.children}
        </CreatContext.Provider>
    )
}