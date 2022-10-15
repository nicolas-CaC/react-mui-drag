import { Button, Card, CardActions, CardContent, CardMedia, FormControl, FormControlLabel, FormLabel, Grid, Input, MenuItem, Radio, RadioGroup, Select, Slider, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react"

const initialStateForm = {
    avatar: '',
    nombre: '',
    nickname: '',
    edad: '',
    radio: 2,
    seleccion: 'seleccion_2',
    slide: 5
}

const initialImage = '/img/perfil.png'

export const CardHome = ({ functions }) => {

    const inputRef = useRef();
    const [image, setImage] = useState(initialImage)
    const [form, setForm] = useState(initialStateForm)









    function inputFile() {
        inputRef.current.className = 'inputFile'
    }

    function inputFile2(e) {
        e.preventDefault()
        inputRef.current.className = 'inputFile2'
    }

    useEffect(() => {
        inputFile()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const resetForm = () => {
        setForm(initialStateForm)
    }

    const submitForm = () => {
        console.log('form:', form);
    }

    function subirImagen(file) {
        console.log('subir Imagen:', file);
    }

    function dropImage(e) {
        e.preventDefault()
        if (e.target.files.length === 0) return
        subirImagen(e.target.files[0])
        handleInputChange(e)
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (e) => setImage(e.target.result)
    }


    return (
        <Card sx={ { maxWidth: 450 } }>

            <CardMedia
                component="img"
                height="150"
                width='100%'
                sx={ { backgroundSize: 'cover' } }
                image={ image }
                alt={ image }
            />
            <CardContent
                sx={ { paddingBottom: '5px!important' } }
            >

                <form>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
                    >
                        <Grid item xs={ 12 }>
                            <Input
                                type="file"
                                ref={ inputRef }
                                name='avatar'
                                value={ form.avatar }
                                onDrop={ inputFile }
                                onChange={ dropImage }
                                onDragOver={ inputFile2 }

                            />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <TextField
                                required
                                id='standard-required'
                                variant='standard'
                                label='Obligatorio'
                                size='small'
                                helperText='Nombre/s y apellido/s'
                                fullWidth
                                name='nombre'
                                value={ form.nombre }
                                onFocus={ e => e.target.select() }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={ 6 }>
                            <TextField
                                id='standard-required'
                                variant='standard'
                                label='Ingrese su nickname'
                                size='small'
                                helperText='Nickname'
                                fullWidth
                                name='nickname'
                                value={ form.nickname }
                                onChange={ handleInputChange }
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                required
                                id='standard-required'
                                variant='standard'
                                label='Edad'
                                size='small'
                                fullWidth
                                name='edad'
                                value={ form.edad }
                                onChange={ handleInputChange }
                            />
                        </Grid>
                        <Grid item marginY='1em'>
                            <FormControl>
                                <FormLabel>Radio</FormLabel>
                                <RadioGroup
                                    name='radio'
                                    value={ form.radio }
                                    onChange={ handleInputChange }
                                    row
                                >
                                    <FormControlLabel
                                        key='opcion1'
                                        value={ 1 }
                                        control={ <Radio size='small' /> }
                                        label='Opcion 1'
                                    />
                                    <FormControlLabel
                                        key='opcion2'
                                        value={ 2 }
                                        control={ <Radio size='small' /> }
                                        label='Opcion 2'
                                    />
                                    <FormControlLabel
                                        key='opcio 3'
                                        value={ 3 }
                                        control={ <Radio size='small' /> }
                                        label='Opcion 3'
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={ 12 }>
                            <FormControl fullWidth>
                                <Select
                                    name='seleccion'
                                    value={ form.seleccion }
                                    onChange={ handleInputChange }
                                    size='small'
                                >
                                    <MenuItem key='select1' value='seleccion_1'>Color 1</MenuItem>
                                    <MenuItem key='select2' value='seleccion_2'>Color 2</MenuItem>
                                    <MenuItem key='select3' value='seleccion_3'>Color 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <div style={ { width: '400px' } }>
                                Talla
                                <Slider
                                    name='slide'
                                    value={ form.slide }
                                    onChange={ handleInputChange }
                                    step={ 1 }
                                    min={ 1 }
                                    max={ 10 }
                                    valueLabelDisplay='auto'
                                    marks={ [
                                        {
                                            value: 1,
                                            label: '1'
                                        }, {
                                            value: 5,
                                            label: '5'
                                        }, {
                                            value: 10,
                                            label: '10'
                                        }
                                    ] }
                                />
                            </div>
                        </Grid>


                        <CardActions>
                            <Grid
                                container
                                alignContent='center'
                                justifyContent='center'
                                width='100%'
                                sx={ { marginTop: '1em' } }
                                columnGap={ 3 }
                            >

                                <Grid item>
                                    <Button
                                        size="small"
                                        variant='contained'
                                        onClick={ submitForm }
                                    >
                                        Guardar
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        size="small"
                                        variant='contained'
                                        onClick={ resetForm }
                                    >
                                        Resetear
                                    </Button>
                                </Grid>

                            </Grid>

                        </CardActions>
                    </Grid>
                </form>

            </CardContent>

        </Card>
    )
}