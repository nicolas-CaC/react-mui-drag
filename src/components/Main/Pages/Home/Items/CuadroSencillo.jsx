import { Grid, Typography } from "@mui/material"

export const CuadroSencillo = ({ functions }) => {

    const { dragOver, dragEnter, dragLeave, fileDrop } = functions

    return (
        <Grid
            container
            height='50vh'
            width='100vw'
            justifyContent='center'
            alignItems='center'
            backgroundColor='white'
        >
            <div
                onDrop={ fileDrop }
                onDragOver={ dragOver }
                onDragEnter={ dragEnter }
                onDragLeave={ dragLeave }
                style={ {
                    width: '90%',
                    backgroundcolor: '#efefef'
                } }>
                <Grid
                    item
                    xs={ 12 }
                    py={ 15 }
                    border='dashed'
                >
                    <Typography
                        xs={ 12 }
                        align='center'>
                        Soltar y dejar
                    </Typography>
                </Grid>
            </div>

        </Grid>
    )
}