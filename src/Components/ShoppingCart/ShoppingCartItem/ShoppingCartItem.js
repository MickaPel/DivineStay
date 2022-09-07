import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  useDispatch } from "react-redux";
import { removeFromCart, adjustQuantity } from "../../../Redux/Products/actionProducts";

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 25,
        width: "100%",
        height: "100%",
    },
    root1: {
        width: 350,
        margin: "auto",
        paddingTop: 20
    },
    input: {
        width: 70,
        marginRight: 20
    },
    typographyQty: {
        marginLeft: 5,
        color: "#FFF38C"
    },
    itemInfo: {
        color: "#FFF38C"
    }
}));

export default function MaterialTableDemo({ productData }) {
    const classes = useStyles();

    const quantity = productData.qty === 1 
                    ? <p> personne</p>
                    : <p> personnes</p>;
    
    const dispatch = useDispatch();

    const [input, setInput] = useState(productData.qty);

    const onChangeHandler1 = (e) => {
        setInput(e.target.value);
        dispatch(adjustQuantity(productData.id, e.target.value));
    }
    
    return (
        <div className={classes.root}>
            <Card className={classes.root1} style={{backgroundColor: "#34656d"}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={productData.name}
                    height="140"
                    image={productData.image1}
                    title={productData.name}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: "#ffcd3c"}}>
                                {productData.name}
                            </Typography>
                            <Typography component="h6" className={classes.itemInfo}>
                                Durée du voyage: {productData.duration}
                            </Typography>
                            <Typography component="h6" className={classes.itemInfo}>
                                Vous avez réservé pour:
                            </Typography>
                            <Grid   container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <input
                                        min="1"
                                        type="number"
                                        id="qty"
                                        name="qty"
                                        value={input}
                                        onChange={onChangeHandler1}
                                        style={{width: 35,
                                            height: 25,
                                            borderRadius: 10,
                                            border: "1 solid",
                                            outline: "none"}}
                                    />
                            <Typography component="h6" className={classes.typographyQty}>
                                {quantity} 
                            </Typography>
                            </Grid>
                        </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <IconButton 
                            edge="start" 
                            color="inherit" 
                            aria-label="menu"
                            onClick={() => dispatch(removeFromCart(productData.id))}>
                            <HighlightOffIcon style={{fill: "#ce1212"}} fontSize="large"/>
                        </IconButton>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
}