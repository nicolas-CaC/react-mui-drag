import { Button, Grid, TextField } from "@mui/material"

export const Form = () => {
    return (
        <form>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 }>
                    <TextField
                        type='text'
                        label='Nombre'
                        color='navbar'
                        placeholder='Ubique aquí su nombre real'
                        fullWidth />
                </Grid>

                <Grid item xs={ 12 }>
                    <TextField
                        type='text'
                        label='Apellido'
                        color='navbar'
                        placeholder='Diganos cómo es su apellido'
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    marginY={ 1 }
                    xs={ 12 }>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        Hola Pibes
                    </Button>
                </Grid>

            </Grid>
        </form>
    )
}