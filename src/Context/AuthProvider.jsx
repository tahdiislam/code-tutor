import React, { createContext } from 'react';
import { getAuth } from "firebase/auth"
import app from '../Firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const user = {displayName: "Tahdi Islam", uid: '32434253425'}
    return (
        <AuthContext.Provider value={{user}}>
            {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;