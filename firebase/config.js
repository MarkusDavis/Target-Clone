import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnukR6eNM4uODbmDciRXN2N2GS9u7y6qc",
    authDomain: "targetclonenextjs.firebaseapp.com",
    projectId: "targetclonenextjs",
    storageBucket: "targetclonenextjs.appspot.com",
    messagingSenderId: "772726595610",
    appId: "1:772726595610:web:afd56bbd1283875b77b1a3",
    measurementId: "G-3R5QP2VCKS"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export default app;
export { auth, db, storage };
  