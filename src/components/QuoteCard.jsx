import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export const QuoteCard = (props) => {
    return (
        <Card sx={{ minWidth: 275 }} style={{ margin: "15px 7vw" }} variant='outlined'>
            <CardContent>

                <Typography variant="h6" component="div">
                    {props.quote}
                </Typography>
                <Typography sx={{ mt: 1.5, fontSize: 13 }} color="#f73378">
                    #{props.category}
                </Typography>

            </CardContent>

        </Card>
    )
}
