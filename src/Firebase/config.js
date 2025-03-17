import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx9gRULQoHN1R15kwbcD_kPIWU8FAXqXU",
  authDomain: "moives-app-ab02a.firebaseapp.com",
  projectId: "moives-app-ab02a",
  storageBucket: "moives-app-ab02a.firebasestorage.app",
  messagingSenderId: "138463672998",
  appId: "1:138463672998:web:c4e48108c97eddb6e91267"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);