import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth()
    const [user, setUser] = useState({})
    const [error, seterror] = useState('')
    const providerGoolge = new GoogleAuthProvider()
    const providerGithub = new GithubAuthProvider()

    const signWithGoogle = () => {

    return signInWithPopup(auth, providerGoolge)

    }

    const signinWithGithub = () => {

       return signInWithPopup(auth, providerGithub)
    
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
                if(user){
                    setUser(user)
                }
                
        })
    }, [])

    const logOut = () => {
     


signOut(auth).then(() => {
   setUser()
}).catch((error) => {
  // An error happened.
});
    }

    const hadnleSubmit = e => {
        e.preventDefult()
    }
    return {error, user, setUser, seterror, hadnleSubmit, signWithGoogle, signinWithGithub, logOut}
};

export default useFirebase;