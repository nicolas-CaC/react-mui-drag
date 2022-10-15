import { Link as RouterLink } from 'react-router-dom'
import { Layout } from "../../Items/Layout"
import { Grid, Link } from "@mui/material"
import { Form } from './Form'


export const Registro = () => {
    return (
        <Layout titulo='Ingrese los datos'>

            <Form />

            <Grid container justifyContent='center'>

                <Link
                    component={ RouterLink }
                    color='primary'
                    to='/formularios/login'
                >
                    Vamo' a loguearno'
                </Link>

            </Grid>

        </Layout>
    )
}