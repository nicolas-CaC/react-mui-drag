import { Grid, Link } from "@mui/material"
import { Layout } from "../../Items/Layout"
import { Form } from "./Form"
import { Link as RouterLink } from 'react-router-dom'

export const Login = () => {
    return (
        <Layout titulo='Ingrese los datos'>

            <Form />

            <Grid container justifyContent='center'>

                <Link
                    component={ RouterLink }
                    color='primary'
                    to='/formularios/registro'
                >Vamos a registrarno'</Link>

            </Grid>

        </Layout>
    )
}