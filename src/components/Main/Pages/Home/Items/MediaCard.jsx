import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const MediaCard = ({ imagen, titulo, descripcion }) => {

    return (
        <Card sx={ {
            maxWidth: 345,
            backgroundColor: 'primary.violetita',
            margin: '10px 0'
        } }>
            <CardMedia
                component="img"
                height="140"
                image={ imagen }
                alt={ titulo }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { titulo }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { descripcion }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Ver más</Button>
            </CardActions>
        </Card>
    );
}
