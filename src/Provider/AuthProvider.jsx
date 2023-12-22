

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth (app); 

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true); 

const  googleProvider = new GoogleAuthProvider();

const createUser = (email, password) => {
    setLoading(true); 
   return  createUserWithEmailAndPassword(auth, email, password) 
}

const googleSignIn = () => {
     setLoading(true); 
     return signInWithPopup(auth, googleProvider); 
}
const signInUser = (email, password) => {
    setLoading(true); 
   return  signInWithEmailAndPassword(auth, email, password)

}

const logOut = () => { 
    setLoading(true); 
    return signOut(auth); 
}

     
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  

const authInfo = {
    user, 
    loading,
    createUser,
    googleSignIn, 
    signInUser,
    logOut,

}



    return (
      <AuthContext.Provider value={authInfo}>
        {children} 
      </AuthContext.Provider>
    );
};

export default AuthProvider;