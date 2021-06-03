import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { emptyCart } from "../../Redux/Products/actionProducts";
import firebaseContext from "../firebase/context";

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';

import ShoppingCartItem from "././ShoppingCartItem/ShoppingCartItem";

import Background from "../Images/VoieLactée.jpg";

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
    root1: {
        width: "70%",
        margin: "auto",
        paddingTop: 20
    },
    root2: {
        maxWidth: 345,
        height: "100%"
    },
    card: {
        margin: "auto",
        width: 350,
        marginTop: 20,
        color: "#ffcd3c",
        backgroundColor: "#34656d"
    },
    popup: {
        width: 800,
        height: 800,
        paddingTop: 20
    },
    textfield1: {
        marginTop: 25,
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
                borderColor: "#f9b208"
            },
            "& .MuiOutlinedInput-input": {
                color: "#e15249"
            },
            "&:hover .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#f9b208"
            },
            "& .MuiInputLabel-outlined": {
                color: "white"
            },
            "&:hover .MuiInputLabel-outlined": {
                color: "#da9833"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#f9b208"
            }
    },
    textfield: {
        marginTop: 8,
        margin: "auto",
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
                borderColor: "#f9b208"
            },
            "& .MuiOutlinedInput-input": {
                color: "#e15249"
            },
            "&:hover .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#f9b208"
            },
            "& .MuiInputLabel-outlined": {
                color: "white"
            },
            "&:hover .MuiInputLabel-outlined": {
                color: "#da9833"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#f9b208"
            }
    },
    textfield2: {
        marginTop: 8,
        width: 70,
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
                borderColor: "#f9b208"
            },
            "& .MuiOutlinedInput-input": {
                color: "#e15249"
            },
            "&:hover .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#f9b208"
            },
            "& .MuiInputLabel-outlined": {
                color: "white"
            },
            "&:hover .MuiInputLabel-outlined": {
                color: "#da9833"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#f9b208"
            }
    },
    select: {
        marginTop: 8,
        width: 70,
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
                borderColor: "#f9b208"
            },
            "& .MuiOutlinedInput-input": {
                color: "#e15249"
            },
            "&:hover .MuiOutlinedInput-input": {
                color: "#da9833"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: "#f9b208"
            },
            "& .MuiInputLabel-outlined": {
                color: "white"
            },
            "&:hover .MuiInputLabel-outlined": {
                color: "#da9833"
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#f9b208"
            }
    },
    title: {
        marginTop: 8,
        marginBottom: 8
    },
    popup2: {
        maxWidth: 300,
        height: "100%"
    }
}));


export default function MaterialTableDemo() {
    const classes = useStyles();

    const cartItem = useSelector( state => state.cartItems.cart);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        let price = 0;
        let items = 0;

        cartItem.forEach(item => {
            items += item.qty;
            price += item.qty * item.price
        })

        setTotalPrice(price);
        setTotalItems(items);

    }, [cartItem, totalPrice, totalItems, setTotalPrice, setTotalItems])

    const firebase = useContext(firebaseContext);

    const [userSession, setUserSession] = useState(null);

    let listener = firebase.auth.onAuthStateChanged(user => {
        setUserSession(user);
    })

    const [anchorEl1, setAnchorEl1] = useState(null);
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;

    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClick2 = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? 'simple-popper' : undefined;

    const handleClick = (event) => {
        if(userSession === null) {
                setAnchorEl1(event.currentTarget)
        } else {
            setShowCard(true);
        }
    };

    const root = {
        flexGrow: 1,
        paddingTop: 25,
        paddingBottom: 500,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    
    const {register, handleSubmit} = useForm();

    const [formData, setFormData] = useState([]);

    const onSubmit = (data) => {
        console.log(data);
        setFormData(data);
    };
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const dispatch = useDispatch();
    
    return (
        <div style={root}>
            <Typography variant="h5" style={{color: "#ffcd3c"}}>
                Récapitulatif de vos réservations
            </Typography>

            <Typography variant="h5">
                {cartItem.map((item) => (
                    <ShoppingCartItem key={item.id} productData={item} />
                ))}
            </Typography>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" color="initial" style={{color: "#e1701a"}}>
                    Résumé du panier
                    </Typography>
                    <Typography variant="body2" component="p">
                    Total d'articles: {totalItems}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Prix total:
                    </Typography>
                    <Typography variant="h5" style={{color: "#e1701a"}}>
                        {totalPrice} €
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid   container
                            direction="row"
                            justify="center"
                            alignItems="center">
                        <Button size="small" onClick={handleClick} style={{color: "#f4cca4"}}>Finaliser la commande</Button>
                    </Grid>
                </CardActions>
            </Card>
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
                                        Vous devez être inscrit sur le site pour pouvoir continuer.
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
                                        to="/sign-up">
                                Inscription
                                </Button>
                                <Button variant="outlined" 
                                        size="medium" 
                                        color="primary" 
                                        style={{color: "#150e56"}}
                                        component={ Link } 
                                        to="/login">
                                Connexion
                                </Button>
                            </Grid>
                            </CardActions>
                        </Card>
                        
            </Popover>





            {showCard === false ? (
                // <div className={classes.root1}>
                // </div>
                <span></span>
            ):(
                <Card className={classes.card}>
                <CardContent>
                <Grid   container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <Typography variant="body2" component="p">
                                    Donées personelles:
                            </Typography>
                            <TextField  type="text"
                                        label="Votre Nom" 
                                        variant="outlined" 
                                        className={classes.textfield1}
                                        name="firstName"
                                        {...register("name", { required: true })}/>
                            <TextField  id="outlined-basic" 
                                        label="Adresse mail" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="email"
                                        {...register("email", { required: true })}/>
                            <TextField  id="outlined-basic" 
                                        label="Adresse" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="text"
                                        {...register("address", { required: true })} />
                            <TextField   
                                        label="Ville" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="text"
                                        id="country"
                                        {...register("city", { required: true })} />
                            <Typography variant="body2" component="p" className={classes.title}>
                                    Donées bancaires:
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.title}>
                                    (!! N'entrez pas votre vrai numéro de carte !!)
                            </Typography>
                            <TextField  id="cardNumber" 
                                        label="Card Number" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="text"
                                        pattern="\d*"
                                        inputProps={{ maxLength: 16 }}
                                        {...register("cardNumber", { required: true })} />
                            <Grid   container
                            direction="row"
                            justify="space-around"
                            alignItems="center">
                                <TextField
                                className={classes.select}
                                variant="outlined"
                                label="Month"
                                select
                                {...register("expire month", { required: true})}
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value="January">January</MenuItem>
                                <MenuItem value="February">February</MenuItem>
                                <MenuItem value="March">March</MenuItem>
                                <MenuItem value="Aril">April</MenuItem>
                                <MenuItem value="May">May</MenuItem>
                                <MenuItem value="June">June</MenuItem>
                                <MenuItem value="July">July</MenuItem>
                                <MenuItem value="August">August</MenuItem>
                                <MenuItem value="September">September</MenuItem>
                                <MenuItem value="October">October</MenuItem>
                                <MenuItem value="November">November</MenuItem>
                                <MenuItem value="December">December</MenuItem>
                            </TextField>
                            <TextField
                                variant="outlined"
                                label="Year"
                                {...register("expire year", { required: true})}
                                className={classes.textfield2}
                                select
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={2021}>2021</MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                <MenuItem value={2024}>2024</MenuItem>
                                <MenuItem value={2025}>2025</MenuItem>
                                <MenuItem value={2026}>2026</MenuItem>
                            </TextField>                               
                            </Grid>
                            <TextField  id="outlined-basic" 
                                        label="MM / YY" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="tel" 
                                        pattern="\d*" 
                                        inputProps={{ maxLength: 5 }}
                                        {...register("cardExpire", { required: true})} />
                            <TextField  id="outlined-basic" 
                                        label="CVC" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="tel" 
                                        pattern="\d*"
                                        inputProps={{ maxLength: 3 }}
                                        {...register("cvc", { required: true })} />
                            <Grid   container
                                    direction="column"
                                    justify="center"
                                    alignItems="center">
                                <IconButton aria-label="arrow" type="submit" onClick={handleClick1}>
                                    <ArrowForwardIcon style={{fill: "#ffcd3c"}} fontSize="large"/>
                                </IconButton>
                            </Grid>
                            </form>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                            >
                                <Card className={classes.root2} style={{backgroundColor: "#34656d"}}>
                                    <CardActionArea>
                                        <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Bravo {formData.name}!!
                                        </Typography>
                                        <Typography component="h6">
                                            Votre réservation a bien été prise en compte.
                                        </Typography>
                                        <Typography component="h6">
                                            Voici le récapitulatif de votre réservation:
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Nom:" " {formData.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            E-mail: {formData.email}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Adresse: {formData.address}, {formData.city}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Séjours réservés: 
                                            <ul>
                                            {cartItem.map((item) => (
                                                <li>{item.name}</li>
                                            ))}
                                                
                                            </ul>
                                        </Typography>   
                                        <Typography component="h6">
                                            Total: {totalPrice} €
                                        </Typography>
                                        <Typography component="h6">
                                            Nous vous souhaitons un agréable voyage! 
                                        </Typography>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-end"
                                            alignItems="center"
                                        >
                                            <Typography component="h6">
                                                A la revoyure. 
                                            </Typography>
                                        </Grid>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" 
                                                color="primary" 
                                                component={Link}
                                                variant="outlined" 
                                                to="/offers-page"
                                                style={{backgroundColor: '#c24914', color: "#bbbbbb", fontSize: 15}}
                                                onClick={() => dispatch(emptyCart())}>
                                        Retour aux offres
                                        </Button>
                                    </CardActions>
                                    </Card>
                            </Popover>
                        </Grid>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            )}

        </div>
    );
    }