import { createContext, useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";

import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

   
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

  
    const logoutUser = () => {
        return signOut(auth);
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
        signInUser,
        googleLogin,
        logoutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;