

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
// import app from "../Firebase/firebase.config";

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

const handleUpdateProfile = (name, photo) => {
  setLoading(true);
  return updateProfile(auth.currentUser, {
    displayName: name,  
    photoURL: photo, 
  });
};
     
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
    handleUpdateProfile 

}



    return (
      <AuthContext.Provider value={authInfo}>
        {children} 
      </AuthContext.Provider>
    );
};

export default AuthProvider;