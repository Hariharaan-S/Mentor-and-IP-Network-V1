import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const FeatureCard = ({ main, sub, image }) => {
    return (
        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image={image}
                    alt="green iguana"
                    style={{
                        borderRadius: "10px"
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {main}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {sub}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default FeatureCard;