import { Route, Routes } from "react-router-dom"
import { Contacto } from './../Contacto'

export const ContactoRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <Contacto /> } />
            <Route path='*' element={ <Contacto /> } />
        </Routes>
    )
}