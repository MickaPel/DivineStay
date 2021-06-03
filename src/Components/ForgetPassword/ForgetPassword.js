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
        fontSize: 26,
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
    pos: {
        marginBottom: 12,
    },
    link: {
        color: "#da9833"
    },
    button: {
        color: "#da9833",
        borderColor: "#da9833"
    }
});

export default function Login(props) {
    const classes = useStyles();

    const firebase = useContext(firebaseContext);

    const [email, setEmail] = useState("");
    const [succes, setSucces] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(user => {
            setError(null);
            setSucces(`Un nouveau mot de passe sera envoyé à ${email}`);
            setEmail("");
            setTimeout(() =>{
                props.history.push("/Login")
            }, 5000);
        })
        .catch(error => {
            setError(error);
            setEmail("");
        })
    }

return (
    <div className={classes.div}>
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Card className={classes.root} style={{backgroundColor: "#1a2849"}}>
                <CardContent>
                    {succes && <span>{succes}</span>}
                    {error && <span>{error.message}</span>}
                    <Typography className={classes.title} color="primary" gutterBottom>
                        Mot de passe oublié?
                    </Typography>
                    <TextField
                        className={classes.title1}
                        required
                        label="E-mail"
                        variant="outlined"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </CardContent>
                <CardActions style={{justifyContent: 'center'}} >
                    <Button size="small" 
                        variant="outlined" 
                        color="primary"
                        disabled={email === "" ? true : false}
                        onClick={handleSubmit}
                        className={classes.button}>
                            Réinitialiser le mot de passe
                    </Button>
                </CardActions>
                <Link className={classes.link} to="/Login">Déjà inscrit? Connectez-vous</Link>
            </Card>
        </Grid>
    </div>
    );
}