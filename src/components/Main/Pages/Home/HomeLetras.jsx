import { Grid, Typography } from "@mui/material"

export const HomeLetras = () => {
    return (
        <Grid
            container
            justifyContent='space-around'
        >
            <Grid item md={ 1 } lg={ 4 }>
                <Typography variant='h1' color='cadetblue'>Col. 1</Typography>
            </Grid>
            <Grid item md={ 1 } lg={ 2 }>
                <Typography variant='h2' color='burlywood'>Col. 2</Typography>
            </Grid>
            <Grid item md={ 1 } lg={ 2 }>
                <Typography variant='h3' color='darkgreen'>Col. 3</Typography>
            </Grid>
            <Grid item md={ 1 } lg={ 2 }>
                <Typography variant='h4'>Col. 4</Typography>
            </Grid>

        </Grid>
    )
}