import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // sing in with provider 
    const signInWithProvider = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // sing up with email and password 
    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile 
    const updateUserProfile = userDetails => {
        setLoading(true)
        return updateProfile(auth.currentUser, userDetails)
    }

    // sign in with email and password
    const logInWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // get user details 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
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
            logInWithEmailAndPassword, 
            loading,
            setLoading,
        }
            }>
            {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;