import { checkCredentials, Login, Logout } from "./AuthSlice"
import { RegisterUser, LogoutFirebase, sigInFirebase } from "../../Firebase/provider";

export const CheckingAutentication = ()=>{
    return async(dispatch)=>{
        dispatch(checkCredentials());
    }
}

export const createUser = ({email,password,displayname})=>{
    return async(dispatch)=>{
        dispatch(checkCredentials());
        const res = await RegisterUser({email,password,displayname});
        if(!res) return dispatch(Logout());
        dispatch(Login(res));
    }
}

export const LogoutUser= ()=>{
    return async(dispatch)=>{
        const res = await LogoutFirebase();
        if(!res) return null;
        dispatch(Logout());
    }
}

export const sigInuser=({email,password})=>{
    return async(dispatch)=>{
        dispatch(checkCredentials());
        const res = await sigInFirebase({email,password})
        if(!res) return dispatch(Logout());
        dispatch(Login(res));
    }
}

