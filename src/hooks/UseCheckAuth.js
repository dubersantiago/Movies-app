import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../Firebase/config";
import { useEffect } from "react";
import { Login, Logout } from "../store/Auth/AuthSlice";

export const UseCheckAuth = () => {
    
    const {status}=useSelector(state=>state.auth);
    const dispatch = useDispatch();
  
    useEffect(()=>{
      onAuthStateChanged(firebaseAuth,async(user)=>{
        if(!user)return dispatch(Logout());
        const {uid,email,displayName} = user;
        dispatch(Login({uid,email,displayName}));
      });
    },[]);

  return {
    status
  }
}
