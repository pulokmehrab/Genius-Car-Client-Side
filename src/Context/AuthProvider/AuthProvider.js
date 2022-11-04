import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firbase.config';



export const AuthContext =createContext();
const auth =getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const providerLogin = (provider)=>{
        // setLoading(true);
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
                console.log(currentUser);
                setUser(currentUser);
            });
            return ()=>{
                unsubscribe();
            }
        },[])
    
    const authinfo ={user,loading,providerLogin,createUser,logIn}
    return (
       <div>
        <AuthContext.Provider value={authinfo}>
          {children}
        </AuthContext.Provider>
       </div>
    );
};

export default AuthProvider;