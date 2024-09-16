import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const authInfo = {
        user : "kawsar"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;