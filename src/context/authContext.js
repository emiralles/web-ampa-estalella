import {createContext, useContext, useState, useEffect} from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/fireabaseConfig";
// import { usuario } from "../models/usuario";
// import axios from "axios";

export const authContext = createContext();

export const useAuth = () =>{
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
}

export function AuthProvider({children}) {
  
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  
  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email,password) =>{
    await signInWithEmailAndPassword(auth,email,password);
  };

  const logOut = async () =>{
    await signOut(auth);
  };

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsuscribe();
  })

  return (
    <authContext.Provider value={{signUp, user, createUser, logOut, loading}}>{children}</authContext.Provider>
  )
}

