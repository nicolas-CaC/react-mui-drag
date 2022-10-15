import { Route, Routes } from "react-router-dom"
import { ContactoRoutes } from "../components/Main/Pages/Contacto/Routes/ContactoRoutes"
import { FormRoutes } from "../components/Main/Pages/Formulario/Routes/FormRoutes"
import { HomeRoutes } from "../components/Main/Pages/Home/Routes/HomeRoutes"

export const Rutas = () => {
    return (
        <Routes>
            <Route path='formularios/*' element={ <FormRoutes /> } />
            <Route path='contacto/*' element={ <ContactoRoutes /> } />
            <Route path='*' element={ <HomeRoutes /> } />
        </Routes>
    )
}