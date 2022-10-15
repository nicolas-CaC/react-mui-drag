import { Grid } from "@mui/material"
import { imagenes } from "../../../../data/links"
import { MediaCard } from "./Items/MediaCard"
import { cards as datos } from '../../../../data/datos'

export const HomeCards = () => {
    return (
        <Grid
            container
            justifyContent='space-around'
            direction='row'>

            <MediaCard
                imagen={ imagenes.img1 }
                titulo={ datos[0].titulo }
                descripcion={ datos[0].descripcion }
            />
            <MediaCard
                imagen={ imagenes.img2 }
                titulo={ datos[1].titulo }
                descripcion={ datos[1].descripcion }
            />

        </Grid>
    )
}