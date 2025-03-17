import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       status:'Cheking',//'not-autenticated' 'atenticated' 'Cheking'
       uid:null,
       email:null,
       displayname:null,
       errormenssge:null
   },
   reducers: {
      Login:(state,{payload})=>{
        state.status = 'autenticated',
        state.uid = payload.uid,
        state.email = payload.email,
        state.displayname = payload.displayname,
        state.errormenssge=null
      },
      Logout:(state,{payload})=>{
        state.status = 'no-autenticated',
        state.uid = null,
        state.email = null,
        state.displayname = null,
        state.errormenssge=payload?.errormenssge
      },
      checkCredentials:(state)=>{
        state.status = 'checking'
      }
   }
});


export const { Login,Logout,checkCredentials } = authSlice.actions;