import { Button, Grid, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'

export const Form = () => {
    return (
        <form>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <TextField
                        required
                        type='text'
                        label='E-mail'
                        color='navbar'
                        variant='filled'
                        id='filled-required'
                        placeholder='Ingrese su correo electronico'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={ 12 }>
                    <TextField
                        type='text'
                        minRows={ 4 }
                        id='outlined-multiline-flexible'
                        label='Mensaje'
                        multiline
                        color='navbar'
                        variant='standard'
                        placeholder='Ingrese su mensaje'
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    marginY={ 1 }
                    xs={ 12 }
                >
                    <Button
                        variant='contained'
                        color='primary'
                        sx={ {
                            ':hover': { backgroundColor: 'secondary.verdecito' }
                        } }
                        fullWidth
                    >
                        Enviar
                        <SendIcon sx={ { pl: 2 } } />
                    </Button>

                </Grid>

            </Grid>
        </form>
    )
}