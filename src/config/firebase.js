import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBp1-W7yV3wGncWaxkOoH0LbdoC9A5N4E",
    authDomain: "it-sysarch32-store-apiag.firebaseapp.com",
    projectId: "it-sysarch32-store-apiag",
    storageBucket: "it-sysarch32-store-apiag.appspot.com",
    messagingSenderId: "5944187449",
    appId: "1:5944187449:web:d2f0a49422be7fa45c4be8",
    measurementId: "G-5HWTER5SXM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);