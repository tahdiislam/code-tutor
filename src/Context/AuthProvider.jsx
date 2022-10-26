import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // sing in with provider 
    const signInWithProvider = provider => {
        return signInWithPopup(auth, provider)
    }

    // sing up with email and password 
    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile 
    const updateUserProfile = userDetails => {
        return updateProfile(auth.currentUser, userDetails)
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
    }

    // get user details 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
        })
        return () => unsubscribe();
    },[])
    return (
        <AuthContext.Provider value={
        {
            user, 
            signInWithProvider,
            logOut, 
            signUpWithEmailAndPassword, 
            updateUserProfile, 
        }
            }>
            {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;