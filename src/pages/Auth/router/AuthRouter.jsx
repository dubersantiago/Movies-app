import { Navigate, Route, Routes } from "react-router"
import { Loguin } from "../Loguin"
import { Register } from "../Register"


export const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<Loguin/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}
