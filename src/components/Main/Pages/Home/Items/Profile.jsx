import { CardHome } from "./CardHome"
import { CuadroSencillo } from "./CuadroSencillo"

export const Profile = () => {

    const card = true

    const functions = {
        dragOver: (e) => {
            e.preventDefault()
            console.log('El elemento está en el cuadro');
        },
        dragEnter: (e) => {
            e.preventDefault()
            console.log('El elemento ha ingresado al cuadro');
        },
        dragLeave: (e) => {
            e.preventDefault()
            console.log('El elemento está fuera del cuadro');
        },
        fileDrop: (e) => {
            e.preventDefault()
            console.log('El elemento ha sido depositado en el cuadro');
            const files = e.dataTransfer.files
            console.log(files);
        },
    }

    return card
        ? <CardHome functions={ functions } />
        : <CuadroSencillo functions={ functions } />

}