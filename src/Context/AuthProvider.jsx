import React, { createContext, useEffect } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth"
import app from '../Firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const user = {displayName: "Tahdi Islam", uid: '32434253425'}
    // sing in with google 
    const signInWithProvider = provider => {
        return signInWithPopup(auth, provider)
    }

    // get user details 
    // useEffect(() => {},[])
    return (
        <AuthContext.Provider value={{user, signInWithProvider}}>
            {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;