import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '@/firebase/config';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 const [userDetails, setUserDetails] = useState({});
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, async (user) => {
     if (user) {
       setUser(user);
       const userRef = doc(db, "users", user.uid);
       const userSnap = await getDoc(userRef);
       if (userSnap.exists()) {
         setUserDetails(userSnap.data());
       } else {
         setUserDetails({});
       }
     } else {
       setUser(null);
       setUserDetails({});
     }
     setLoading(false);
   });

   return unsubscribe;
 }, []);

 const signUp = async (email, password) => {
   try {
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;
     await setDoc(doc(db, "users", user.uid), {
       email: user.email,
     });
     setUser(user);
     setUserDetails({ email: user.email });
   } catch (error) {
     throw error;
   }
 };

 const signIn = async (email, password) => {
   try {
     const userCredential = await signInWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;
     setUser(user);
     const userRef = doc(db, "users", user.uid);
     const userSnap = await getDoc(userRef);
     if (userSnap.exists()) {
       setUserDetails(userSnap.data());
     } else {
       setUserDetails({});
     }
   } catch (error) {
     throw error;
   }
 };

 const signOutUser = async () => {
   try {
     await signOut(auth);
     setUser(null);
     setUserDetails({});
   } catch (error) {
     throw error;
   }
 };

 if (loading) {
   return <div>Loading...</div>;
 }

 return (
   <AuthContext.Provider value={{ user, userDetails, signUp, signIn, signOutUser }}>
     {children}
   </AuthContext.Provider>
 );
};