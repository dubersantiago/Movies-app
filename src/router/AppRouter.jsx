import { Navigate, Route, Routes } from 'react-router'
import { NowMoivespage } from '../pages/NowMoives'
import { UseCheckAuth } from '../hooks/UseCheckAuth'
import { AuthRouter } from '../pages/Auth/router/AuthRouter'

export const AppRouter = () => {

  const {status}=UseCheckAuth();

  return (
    <Routes>
        {(status === 'autenticated')? <Route path='/*' element={<NowMoivespage/>}/> : <Route path='/auth/*' element={<AuthRouter/>}/>}
        <Route path='/*' element={<AuthRouter/>}/>
    </Routes>
  )
}
