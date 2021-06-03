import React, { useState, useContext, useEffect } from 'react';
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
        paddingTop: 20,
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
        fontSize: 16,
        marginTop: 10,
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
    const [password, setPassword] = useState("");
    const [button, setButton] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (password.length > 5 && email !== "") {
            setButton(true)
        } else if (button) {
            setButton(false)
        }
    }, [password, email, button]);

    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, password)
        .then(user => {
            setEmail("");
            setPassword("");
            props.history.push("/profile");
        })
        .catch(error => {
            setError(error);
            setEmail("");
            setPassword("");
        })
    }

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
                    {error !== "" && <span>{error.message}</span>}
                    <Typography className={classes.title} color="primary" gutterBottom>
                        Connexion
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
                    <TextField
                        className={classes.title1}
                        label="Mot de passe"
                        type="password"
                        autoComplete="off"
                        variant="outlined"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </CardContent>
                <CardActions style={{justifyContent: 'center'}} >
                    {button ? <Button size="large" 
                                variant="outlined" 
                                color="primary"
                                onClick={handleSubmit}
                                className={classes.button}>
                                Conexion
                                </Button>
                            : <Button size="large" 
                                variant="outlined" 
                                color="primary"
                                disabled
                                className={classes.button}>
                                Conexion
                                </Button>}
                </CardActions>
                    <Link className={classes.link} to="/sign-up">Pas encore inscrit?</Link>
                    <br/>
                    <Link className={classes.link} to="/forget-password">Mot de passe oublié?</Link>
            </Card>
        </Grid>
    </div>
    );
}