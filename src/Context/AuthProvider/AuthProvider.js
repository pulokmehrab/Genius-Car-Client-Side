import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firbase.config';



export const AuthContext =createContext();
const auth =getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password)=>{
        // setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        // setLoading(true);
        return signOut(auth);
      }

    const providerLogin = (provider)=>{
        // setLoading(true);
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false)
            });
            return ()=>{
                unsubscribe();
            }
        },[])
    
    const authinfo ={user,loading,providerLogin,createUser,logIn,logOut}
    return (
       <div>
        <AuthContext.Provider value={authinfo}>
          {children}
        </AuthContext.Provider>
       </div>
    );
};

export default AuthProvider;