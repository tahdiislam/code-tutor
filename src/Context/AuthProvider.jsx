import React, { createContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import app from '../Firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // sing in with google 
    const signInWithProvider = provider => {
        return signInWithPopup(auth, provider)
    }

    // get user details 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe();
    },[])
    return (
        <AuthContext.Provider value={{user, signInWithProvider}}>
            {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;