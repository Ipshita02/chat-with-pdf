import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSpXJh6_0kEI-TMS-4qkjVZN5D7z72hiw",
    authDomain: "chatwithpdf-d1ea8.firebaseapp.com",
    projectId: "chatwithpdf-d1ea8",
    storageBucket: "chatwithpdf-d1ea8.appspot.com",
    messagingSenderId: "862865533562",
    appId: "1:862865533562:web:f36ffb33020204c71e69c3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
