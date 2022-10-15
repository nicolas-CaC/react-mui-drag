import { Grid, Typography } from "@mui/material"

export const Home = () => {
    return (
        <Grid
            container
            justifyContent='center'
        >
            <Grid item
                sm={ 3 }>
                <Typography variant='mifont'>
                    Hola
                </Typography>
            </Grid>
            <Grid
                item
                md={ 2 }>
                <Typography variant='mifont'>
                    Como
                </Typography>
            </Grid>
            <Grid item
                lg={ 4 }>
                <Typography variant='mifont'>
                    Te
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='mifont'>
                    Va
                </Typography>
            </Grid>
        </Grid>
    )
}