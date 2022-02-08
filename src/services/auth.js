import React, { createContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    connectAuthEmulator,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8S_OXhDbDmtGhB6DqckbkU0oWNnRFrXA",
    authDomain: "fastchat7.firebaseapp.com",
    projectId: "fastchat7",
    storageBucket: "fastchat7.appspot.com",
    messagingSenderId: "906322498982",
    appId: "1:906322498982:web:8b0e1eff3f1cd61e7e2b67",
    measurementId: "G-31XXJP8SKN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });

// export const signInWithGoogle = () => { }

// export const signInWithMicrosoft = () => { }

export const authContext = createContext();

export function useAuthProvider() {
    const [user, setUser] = useState(null);
    const [openSnack, setOpenSnack] = useState(false);
    const [loadingUser, setLoadingUser] = useState(true);


    const closeSnack = () => {
        setOpenSnack(false);
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const temp = userCredential.user;
                //setUser({ firebase_user: temp });
                // fetch user profile from django
                // keep the object
                // update user from provider
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setOpenSnack(true);
                console.log(errorCode);
                console.log(errorMessage);
            });
        //setUser({ uid: 1, name: "Diego", age: 25 });
    };

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // update user from provider
            setUser(null);
        }).catch((error) => {
            // An error happened.
        });
    }

    const createUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    const temp = { ...auth.currentUser };
                    setUser(temp);
                }).catch((error) => {
                    // An error occurred
                });

                // send request to django to create user in our own DB
                // django should respond with full user profile
                // keep the object
                // update user from provider
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);

        } else {
            setUser(null);
        }
        setLoadingUser(false);
    });

    return { user, login, logout, createUser, openSnack, closeSnack, loadingUser, setLoadingUser };
}

export function AuthProvider({ children }) {
    const auth = useAuthProvider();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}