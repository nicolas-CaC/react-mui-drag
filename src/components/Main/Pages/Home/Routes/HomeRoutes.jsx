import { Navigate, Route, Routes } from "react-router-dom"
import { HomeLetras } from "../HomeLetras"
import { HomeCards } from "../HomeCards"
import { Home } from "../Home"

export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='letras' element={ <HomeLetras /> } />
            <Route path='cards' element={ <HomeCards /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}