import React, { useState, useContext } from 'react';
import firebaseContext from "../firebase/context";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Background from "../Images/BackgroundS.jpg";

const useStyles = makeStyles({
    div: {
        paddingTop: 25,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    root: {
        minWidth: 275,
        maxWidth: 350,
    },
    title: {
        fontSize: 25,
        color: "#da9833"
    },
    title1: {
        marginTop: 10,
        fontSize: 16,
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
    },
    link: {
        color: "#da9833"
    },
    button: {
        color: "#da9833",
        borderColor: "#da9833"
    }
});

export default function SignUp(props) {
    const classes = useStyles();

    const firebase = useContext(firebaseContext);
    
    const data = {
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    
    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState("");
    
    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    };

    function handleSubmit (e) {
        e.preventDefault();
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
        .then( authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email
            })
        })
        .then(() => {
            setLoginData({...data});
            props.history.push("/Profile");
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
}

    const { pseudo, email, password, confirmPassword } = loginData;

    //gestion erreurs
    const errorMsg = error !== "" && <span>{error.message}</span>;

return (
    <div className={classes.div}>
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Card className={classes.root} 
                    style={{backgroundColor: "#1a2849"}}>
                <CardContent>
                    {errorMsg}
                    <Typography className={classes.title} color="primary" gutterBottom>
                        Inscription
                    </Typography>
                    <TextField
                        className={classes.title1}
                        required
                        id="pseudo"
                        label="Pseudo"
                        variant="outlined"
                        type="text"
                        onChange={handleChange}
                        value={pseudo}
                    />
                    <TextField
                        className={classes.title1}
                        required
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        type="email"
                        onChange={handleChange}
                        value={email}
                    />
                    <TextField
                        className={classes.title1}
                        id="password"
                        label="Mot de passe"
                        type="password"
                        autoComplete="off"
                        variant="outlined"
                        onChange={handleChange}
                        value={password}
                    />
                    <TextField
                        className={classes.title1}
                        id="confirmPassword"
                        label="Confirmer le mot de passe"
                        type="password"
                        autoComplete="off"
                        variant="outlined"
                        onChange={handleChange}
                        value={confirmPassword}
                    />
                </CardContent>
                <CardActions style={{justifyContent: 'center'}} >
                    <Button size="large" 
                        variant="outlined" 
                        color="primary" 
                        disabled={pseudo === "" || email === "" || password === "" || 
                        password !== confirmPassword ? true : false}
                        onClick={handleSubmit}
                        className={classes.button}>
                            Inscription
                    </Button>
                </CardActions>
                <Link className={classes.link} to="/login">Déjà inscrit? Connectez-vous</Link>
            </Card>
        </Grid>
    </div>
    );
}