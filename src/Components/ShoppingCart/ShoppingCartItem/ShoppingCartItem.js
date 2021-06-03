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
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

import Background from "../../Images/VoieLactée.jpg";




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
        marginLeft: 5
    }
}));

const currencies = [
    {
        value: 1
    },
    {
        value: 2
    },
    {
        value: 3
    },
    {
        value: 4
    }
];

export default function MaterialTableDemo({ productData }) {
    const classes = useStyles();


    const quantity = productData.qty === 1 
                    ? <p> personne</p>
                    : <p> personnes</p>;
    
    const dispatch = useDispatch();

    const [input, setInput] = useState(productData.qty);
    const [productsNumber, setProductsNumber] = useState(1);

    const onChangeHandler1 = (e) => {
        setProductsNumber(e.target.value);
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
            <Typography component="h6">
                Durée du voyage: {productData.duration}
            </Typography>
            <Typography component="h6">
                Vous avez réservé pour:
            </Typography>
            <Grid   container
                    direction="row"
                    justify="center"
                    alignItems="center">
            <TextField
                        className={classes.input}
                        id="standard-select-currency"
                        select
                        variant="outlined"
                        label="Voyageurs"
                        value={productsNumber}
                        onChange={onChangeHandler1}
                        // helperText="Le nombre de passagers"
            >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
            </TextField>
            <Typography component="h6" className={classes.typographyQty}>
                {quantity} 
            </Typography>
            </Grid>
            </CardContent>
        </CardActionArea>
        <CardActions>
        <Grid   container
                direction="row"
                justify="center"
                alignItems="center">
            <IconButton 
                edge="start" 
                // className={classes.menuButton1} 
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