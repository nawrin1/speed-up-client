import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth=getAuth(app)


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState([])
    const [loading, setLoading] = useState(true);
    const provider=new GoogleAuthProvider()
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        console.log('okok')
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
           
            setLoading(false)
            console.log('c',currentUser)

        })
        return () => {
            unSubscribe();
        }
    },[])


    const userInfo={user,createUser,loading,logOut,login,googleSignIn}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;