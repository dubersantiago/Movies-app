import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";


export const RegisterUser =async({email,password,displayname})=>{
    try {
        const res = await createUserWithEmailAndPassword(firebaseAuth,email,password);
        const {uid} = res.user;
        await updateProfile(firebaseAuth.currentUser,{displayname})
        return {
            ok:true,
            uid,email,displayname
        }
    } catch (error) {
        //console.log('error respuesta del provider'+error.message);
        return {
            ok:false,
            error: error.message
        }
    }
}

export const sigInFirebase=async({email,password})=>{
    try {
        const res = await signInWithEmailAndPassword(firebaseAuth,email,password);
        const {uid,displayName}=res.user;
        return {
            ok:true,
            uid,displayname,email
        }
    } catch (error) {
        return {
            ok:false,
            error: error.message
        }
    }
}

export const LogoutFirebase = async()=>{
    try {
        const res = await signOut(firebaseAuth);
        return {
            ok:true
        }
        
    } catch (error) {
        return {
            ok:false,
            error: error.message
        }
    }
}