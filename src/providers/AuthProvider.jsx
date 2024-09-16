import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [auth])


    const authInfo = {
        user,
        loading,
        loginUser,
        signUpUser,
        logOutUser,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;