import { createContext, useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
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

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
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
        signInUser,
        googleLogin,
        logoutUser,
        updateUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;