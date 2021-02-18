import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function myCard() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="273026"
                        height="100%"
                        image="/images/273026.jpg"
                        title="273026"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            2-273026
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <div>Technic, Brick 1 x 10 with Holes</div>
                            <div>Black</div>
                            <div>4 in stock</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href="/241226">
                        <Button size="small" color="primary">
                            1-241226
                        </Button>
                    </Link>
                    <Link href="/302026">
                        <Button size="small" color="primary">
                            3-302026
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    );
}
