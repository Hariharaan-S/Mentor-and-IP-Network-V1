import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ({ media }) => {
    return (
        <Card sx={{ maxWidth: 345, height: 400, position: "relative" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={media.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {media.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {media.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ position: "absolute", bottom: "1.2rem" }}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;