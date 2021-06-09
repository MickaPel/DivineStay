import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Products/actionProducts";
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';


import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "../../Slider.css";

import Background from "../Images/stars01.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 25,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  card: {
    maxWidth: "75%",
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "#1b262c"
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  desription: {
      marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.initial,
    backgroundColor: "#e1bc91",
    textAlign: 'center',
    fontFamily: 'Goldman',
    fontSize: 20
  },
  slider: {
    paddingTop: 20,
    width: 600,
    height: 400,
    marginLeft: "auto",
    marginRight: "auto"
  },
  height: {
    height: 30
  },
  input: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 5,
    },
    '& p':{
      color:'white',
    },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#da9833"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#6bc5d2"
      },
      "& .MuiOutlinedInput-input": {
          color: "#e15249"
      },
      "&:hover .MuiOutlinedInput-input": {
          color: "#da9833"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
          color: "#6bc5d2"
      },
      "& .MuiInputLabel-outlined": {
          color: "white"
      },
      "&:hover .MuiInputLabel-outlined": {
          color: "#da9833"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
          color: "#6bc5d2"
      }
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Goldman',
      'cursive',
    ].join(','),
  },});

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

  export default function ShopCard(props) {
  const classes = useStyles();

  const [productsNumber, setProductsNumber] = useState(1);

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const {productId} = useParams();

  const productsData = useSelector(state => state.cartItems.products);

  const thisProduct = productsData.find(prod => prod.name === productId);
  const name = thisProduct.name;

  const [restTravels, setRestTravels] = useState(11);

    useEffect(() => {
        let count = 11;
        productsData.forEach((item) => {
            count += item.qty;
        });

        setRestTravels(count);
    }, [productsData, restTravels])

  
  const dispatch = useDispatch();

  const onClick = (event) => {
    dispatch(addToCart(thisProduct.id, productsNumber));
    // props.history.push("/offers-page");
    setAnchorEl1(event.currentTarget)
  }

  const [anchorEl1, setAnchorEl1] = useState(null);
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;

    const handleClose1 = () => {
        setAnchorEl1(null);
    };

  return (
    <div className={classes.root}>

      <MuiThemeProvider theme={theme}>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >

          <Card className={classes.card}>
            <CardContent>

              <AutoplaySlider
                className="aws-btn1"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                bullets={false}
                // organicArrows={false}
              >
                <div data-src={thisProduct.image1} />
                <div data-src={thisProduct.image2} />
                <div data-src={thisProduct.image3} />
              </AutoplaySlider>

              <Typography className={classes.height} variant="h4" component="p"></Typography>
              <Typography className={classes.description} 
              variant="h4" 
              component="p" 
              style={{color: "#ffc764"}}>
                {name} 
              </Typography>
              <Typography className={classes.height} variant="h4" component="p"></Typography>
              <Typography className={classes.description} 
              variant="body2" 
              component="p" 
              style={{color: "#939b62"}}>
                {thisProduct.description} 
              </Typography>
              <Typography className={classes.height} variant="h4" component="p"></Typography>

              <Grid container spacing={3} direction="column" alignItems="center">
                  <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>Durée: {thisProduct.duration}</Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>{thisProduct.price} €</Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        className={classes.input}
                        id="standard-select-currency"
                        select
                        variant="outlined"
                        label="Choisir"
                        value={productsNumber}
                        onChange={ e => setProductsNumber(e.target.value)}
                        helperText="Le nombre de passagers"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        style={{backgroundColor: '#c24914', color: "#bbbbbb", fontSize: 20}}
                        onClick={onClick}
                                        >
                          Ajouter au panier
                      </Button>
                  </Grid>
                  <Popover
                    id={id1}
                    open={open1}
                    anchorEl={anchorEl1}
                    onClose={handleClose1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}>
                        <Card className={classes.popup2} style={{backgroundColor: "#ffb26b"}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography component="h6" style={{color: "#564a4a"}}>
                                        Vous venez de réserver un séjour pour {name}. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Grid   container
                                    direction="row"
                                    justify="space-around"
                                    alignItems="center">
                                <Button variant="outlined" 
                                        size="medium" 
                                        color="secondary" 
                                        style={{color: "#810000"}}
                                        component={ Link } 
                                        to="/offers-page">
                                Retour aux offres
                                </Button>
                                <Button variant="outlined" 
                                        size="medium" 
                                        color="primary" 
                                        style={{color: "#150e56"}}
                                        component={ Link } 
                                        to="/shopping-cart">
                                Voir le panier
                                </Button>
                            </Grid>
                            </CardActions>
                        </Card>
                        
            </Popover>
              </Grid>

            </CardContent>
          </Card>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}