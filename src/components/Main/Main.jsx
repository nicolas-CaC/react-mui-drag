import { Grid } from "@mui/material"
import { Rutas } from "../../Router/Rutas"

export const Main = () => {
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            position={ 'relative' }
            columnSpacing={ 0 }
            justifyContent='space-around'
            sx={ { minHeight: '100vh' } }
            backgroundColor='secondary.violetita'
        >


            <Rutas />
        </Grid>
    )
}