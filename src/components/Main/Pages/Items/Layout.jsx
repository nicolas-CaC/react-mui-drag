import { Grid, Typography } from "@mui/material"

export const Layout = ({ children, titulo = '' }) => {
    return (
        <Grid
            container
            padding={ 5 }
            marginY={ 3 }
            justifyContent='center'
        >
            <Grid
                item
                xs={ 10 }
                md={ 6 }
                lg={ 4 }
                padding={ 3 }
                sx={ { borderRadius: '15px', boxShadow: '0px 6px 22px rgb(0 0 0 / 27%' } }
                backgroundColor='primary.violetita'
            >
                <Grid
                    container
                    justifyContent='center'
                >
                    <Grid item paddingBottom={ 2 }>
                        <Typography variant='h5'>{ titulo }</Typography>
                    </Grid>
                </Grid>
                { children }
            </Grid>
        </Grid>
    )
}