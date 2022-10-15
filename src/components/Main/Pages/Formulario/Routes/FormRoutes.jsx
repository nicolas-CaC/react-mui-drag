import { Navigate, Route, Routes } from "react-router-dom"
import { Login, Registro } from "./../"

export const FormRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={ <Login /> } />
            <Route path='registro' element={ <Registro /> } />
            <Route path='*' element={ <Navigate to='/formularios/login' /> } />
        </Routes>
    )
}