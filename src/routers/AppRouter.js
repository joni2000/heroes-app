
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>

        <Routes>

            <Route path='/login' element={ <LoginScreen /> }/>

            <Route path='/*' element={ <DashboardRoutes /> }/>

        </Routes>
    </BrowserRouter>
  )
}
