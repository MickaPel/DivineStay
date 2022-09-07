import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
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
import CheckIcon from '@material-ui/icons/Check';
import Popover from '@material-ui/core/Popover';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import ShoppingCartItem from "././ShoppingCartItem/ShoppingCartItem";

import Background from "../Images/VoieLactée.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 25,
        paddingBottom: 500,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    card: {
        margin: "auto",
        justifyContent: "start",
        width: 350,
        marginTop: 20,
        color: "#ffcd3c",
        backgroundColor: "#34656d"
    },
    cardEmpty: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: 350,
        height: 200,
        marginTop: 20,
        color: "#ffcd3c",
        backgroundColor: "#34656d"
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
    title: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18
    },
    popup2: {
        maxWidth: 300,
        height: "100%"
    },
    error: {
        color: "#FF4A4A",
        fontSize: 15
    },
    recapCardText: {
        color: "#FFF38C",
    },
    recapCardText2: {
        color: "#FFF38C",
        marginTop: 10
    },
    recapCardText3: {
        color: "#FFF38C",
        marginTop: 20
    }
}));

export default function ShoppingCart() {

    const classes = useStyles();

    const cartItem = useSelector( state => state.cartItems.cart);
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [showCard, setShowCard] = useState(false);

    useLayoutEffect(() => {
        let unmounted = false;
        let price = 0;
        let items = 0;

        if(!unmounted) {
            cartItem.forEach(item => {
                items += item.quantity;
                price += item.qty * item.price
            })
            setTotalPrice(price);
            setTotalItems(items);
        }

        return () => unmounted = true;

    }, [cartItem, totalPrice, totalItems, setTotalPrice, setTotalItems])

    const firebase = useContext(firebaseContext);

    const [userSession, setUserSession] = useState(null);
    firebase.auth.onAuthStateChanged(user => {
        setUserSession(user);
    })

    const [anchorEl1, setAnchorEl1] = useState(null);
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;

    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const [cartInfosCopy, setCartInfosCopy] = useState();
    const [totalPriceCopy, setTotalPriceCopy] = useState();

    const handleClick = (event) => {
        if(userSession === null) {
                setAnchorEl1(event.currentTarget)
        } else {
            setShowCard(true);
        }
        setCartInfosCopy(cartItem);
        setTotalPriceCopy(totalPrice);
    };
    
    const {register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm();

    const [cardType, setCardType] = useState('visa');

    const handleChange = (event) => {
        setCardType(event.target.value);
    };

    const [formData, setFormData] = useState([]);

    const onSubmit = (data) => {
        setFormData(data);
        window.scrollTo(0,0);
    };

    const [checkButton, setCheckButton] = useState(false);
    useEffect(() => {
        if (isSubmitSuccessful !== true) {
            setCheckButton(true)
        } else if (checkButton) {
            setCheckButton(false)
        }
    }, [isSubmitSuccessful, checkButton]);
                            
    return (isSubmitSuccessful === false) ? (
        <div className={classes.root}>
            <Typography variant="h5" style={{color: "#ffcd3c"}}>
                Récapitulatif de vos réservations
            </Typography>
            <Typography variant="h5">
                {cartItem.map((item) => (
                    <ShoppingCartItem key={item.id} productData={item} />
                ))}
            </Typography>

            {totalItems === 0 ? <Card className={classes.cardEmpty}>
                                    <CardContent>
                                        <Typography variant="body2" component="p">
                                            Votre panier est vide
                                        </Typography>
                                    </CardContent>
                                </Card>
                                :
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
                                        <Grid container
                                            direction="row"
                                            justify="center"
                                            alignItems="center">
                                                <Button size="small" onClick={handleClick} style={{color: "#f4cca4"}}>Finaliser la commande</Button>
                                        </Grid>
                                    </CardActions>
                                </Card>
            }
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
                                <Grid container
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

            {showCard === false ? 
                <span></span>
            :
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography variant="body2" component="p" style={{fontSize: 20}}>
                                        Donées personelles:
                                </Typography>
                                <TextField  type="text"
                                            label="Votre Nom" 
                                            variant="outlined" 
                                            className={classes.textfield1}
                                            name="lastName"
                                            {...register("lastName", { required: true })}/>
                                            {errors.firstName && (<p className={classes.error}>ce champ est requis</p>)}
                                <TextField  type="text"
                                            label="Votre Prénom" 
                                            variant="outlined" 
                                            className={classes.textfield}
                                            name="firstName"
                                            {...register("firstName", { required: true })}/>
                                {errors.firstName && (<p className={classes.error}>ce champ est requis</p>)}
                                <TextField  label="Adresse mail" 
                                            variant="outlined"
                                            className={classes.textfield}
                                            type="text"
                                            {...register("email", { required: "ce champ est requis",
                                                                    pattern: {
                                                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                                        message: "L'adresse mail n'est pas valide"
                                                                    }})}/>
                                            {errors.email ? (
                                                <>
                                                {errors.email.type === "required" && (
                                                    <p className={classes.error}>
                                                    {errors.email.message}
                                                    </p>
                                                )}
                                                {errors.email.type === "pattern" && (
                                                    <p className={classes.error}>
                                                    {errors.email.message}
                                                    </p>
                                                )}
                                                </>
                                            ) : null}
                                <TextField  label="Adresse" 
                                            variant="outlined"
                                            className={classes.textfield}
                                            type="text"
                                            {...register("address", { required: true })} />
                                {errors.address && (<p className={classes.error}>ce champ est requis</p>)}
                                <TextField   
                                            label="Ville" 
                                            variant="outlined"
                                            className={classes.textfield}
                                            type="text"
                                            id="country"
                                            {...register("city", { required: true })} />
                                {errors.city && (<p className={classes.error}>ce champ est requis</p>)}
                                <Typography variant="body2" component="p" className={classes.title}>
                                        Type de carte:
                                </Typography>
                                <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    row
                                    value={cardType}
                                    onChange={handleChange}
                                    color="secondary"
                                >
                                    <FormControlLabel value="visa" control={<Radio color="default" />} label="Visa" />
                                    <FormControlLabel value="mastercard" control={<Radio color="default" />} label="Mastercard" />
                                </RadioGroup>
                                </FormControl>
                                {cardType === 'visa' ?
                                    <TextField  id="cardNumber" 
                                    label="Card Number" 
                                    variant="outlined"
                                    className={classes.textfield}
                                    type="text"
                                    inputProps={{ maxLength: 16 }}
                                    {...register("cardNumber", {required: "ce champ est requis",
                                                                pattern: {
                                                                    value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
                                                                    message: "Le format n'est pas valide"
                                                                }
                                                                })} />
                                    : <TextField  id="cardNumber" 
                                        label="Card Number" 
                                        variant="outlined"
                                        className={classes.textfield}
                                        type="text"
                                        inputProps={{ maxLength: 16 }}
                                        {...register("cardNumber", {required: "ce champ est requis",
                                                                    pattern: {
                                                                        value: /^(?:5[1-5][0-9]{14})$/,
                                                                        message: "Le format n'est pas valide"
                                                                    }
                                                                    })} />
                                    }
                                    {errors.cardNumber ? (
                                        <>
                                        {errors.cardNumber.type === "required" && (
                                            <p className={classes.error}>
                                            {errors.cardNumber.message}
                                            </p>
                                        )}
                                        {errors.cardNumber.type === "pattern" && (
                                            <p className={classes.error}>
                                            {errors.cardNumber.message}
                                            </p>
                                        )}
                                        </>
                                    ) : null}            
                                <TextField  label="MM / YY" 
                                            variant="outlined"
                                            className={classes.textfield}
                                            type="tel" 
                                            inputProps={{ maxLength: 5 }}
                                            {...register("cardExpire", {required: "ce champ est requis",
                                                                        pattern: {
                                                                            value: /^[0-9]{2}[-/][0-9]{2}$/,
                                                                            message: "Le format n'est pas valide"
                                                                        }})} />
                                            {errors.cardExpire ? (
                                                <>
                                                {errors.cardExpire.type === "required" && (
                                                    <p className={classes.error}>
                                                    {errors.cardExpire.message}
                                                    </p>
                                                )}
                                                {errors.cardExpire.type === "pattern" && (
                                                    <p className={classes.error}>
                                                    {errors.cardExpire.message}
                                                    </p>
                                                )}
                                                </>
                                            ) : null}
                                <TextField  label="CVC" 
                                            variant="outlined"
                                            className={classes.textfield}
                                            type="tel" 
                                            inputProps={{ maxLength: 3 }}
                                            {...register("cvc", {required: "ce champ est requis",
                                                                pattern: {
                                                                    value: /^[0-9]{3}$/,
                                                                    message: "Le format n'est pas valide"
                                                                }})} />
                                            {errors.cvc ? (
                                                <>
                                                {errors.cvc.type === "required" && (
                                                    <p className={classes.error}>
                                                    {errors.cvc.message}
                                                    </p>
                                                )}
                                                {errors.cvc.type === "pattern" && (
                                                    <p className={classes.error}>
                                                    {errors.cvc.message}
                                                    </p>
                                                )}
                                                </>
                                            ) : null}
                                <Grid container
                                    direction="column"
                                    justify="center"
                                    alignItems="center">
                                        {checkButton ?  <IconButton aria-label="arrow" type="submit" onClick={() => dispatch(emptyCart())}>
                                                            <CheckIcon style={{fill: "#ffcd3c"}} fontSize="large"/>
                                                        </IconButton>
                                                    : 
                                                        <span></span>
                                        }
                                </Grid>
                            </form>
                        </Grid>
                    </CardContent>
                </Card>
            }
        </div>
    ) : 
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Bravo {formData.lastName} {formData.firstName} !!
                        </Typography>
                        <Typography component="h6" className={classes.recapCardText3}>
                            Votre réservation a bien été prise en compte.
                        </Typography>
                        <Typography component="h6" className={classes.recapCardText}>
                            Voici le récapitulatif de votre réservation:
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.recapCardText3}>
                            Nom: {formData.lastName}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.recapCardText2}>
                            Prénom: {formData.firstName}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.recapCardText2}>
                            E-mail: {formData.email}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.recapCardText2}>
                            Adresse: {formData.address}, {formData.city}
                        </Typography>
                        <Typography variant="body2" component={'span'} className={classes.recapCardText2}>
                            Séjours réservés: 
                            <ul>
                            {cartInfosCopy.map((item) => (
                                <li key={item.name}>{item.name}</li>
                            ))}
                            </ul>
                        </Typography>
                        <Typography component="h6" className={classes.recapCardText2}>
                            Total: {totalPriceCopy} €
                        </Typography>
                        <Typography component="h6" className={classes.recapCardText3}>
                            Nous vous souhaitons un agréable voyage! 
                        </Typography>
                        <Grid container
                            direction="row"
                            justify="flex-end"
                            alignItems="center">
                                <Typography component="h6" className={classes.recapCardText}>
                                    A la revoyure. 
                                </Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Button size="small" 
                                    color="primary" 
                                    
                                    component={Link}
                                    variant="outlined" 
                                    to="/offers-page"
                                    style={{backgroundColor: '#c24914', color: "#bbbbbb", fontSize: 15}}>
                                        Retour aux offres
                            </Button>
                        </Grid>
                    </CardActions>
            </Card>
        </div>;
}