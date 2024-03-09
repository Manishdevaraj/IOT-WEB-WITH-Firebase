import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../services/Firebase.config";


export const Usercontext=createContext();





export function Usercontextprovider({children})
{
    const [user,setuser]=useState("")
    
    function signup(email,password)
    {
       return createUserWithEmailAndPassword(auth,email,password);
    }
    function Login(email,password)
    {
       return signInWithEmailAndPassword(auth,email,password);
    }
    function Logout()
    {
        return signOut(auth)
    }
    function Googlesignin()
    {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }




    useEffect(()=>
    {
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>
        {
            setuser(currentUser);
           
        })
        return ()=>
        {
            unsubscribe();
        }
    },[])

    return <Usercontext.Provider value={{user,signup,Login,Logout,Googlesignin}}>{children}</Usercontext.Provider>
}



Usercontextprovider.propTypes=
{
    children:PropTypes.node.isRequired
}