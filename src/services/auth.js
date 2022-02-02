import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth();

export const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // fetch user profile from django
            // keep the object
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // send request to django to create user in our own DB
            // django should respond with full user profile
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const signInWithGoogle = () => { }

export const signInWithMicrosoft = () => { }