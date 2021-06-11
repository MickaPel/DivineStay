import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import firebaseContext from "../firebase/context";

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Logout from "../Logout/Logout";
import BackGround from "../Images/stars01.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 25,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BackGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    root1: {
        marginTop: 40
    },
    paper: {
        width: "60%",
        backgroundColor: "#34656d"
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    pseudo: {
        color: "#ffcd3c"
    },
    input: {
        display: 'none',
    },
}));

export default function Profile(props) {

    const classes = useStyles();

    const firebase = useContext(firebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push("/");
        })

        if (!!userSession) {
            firebase.user(userSession.uid)
            .get()
            .then( doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData);
                }
            })
            .catch( error => {
                console.log(error);
            })
        }
        
        return () => {
            listener();
        };
    }, [userSession, props.history, firebase])


        return userSession === null ? (
            <div className={classes.root}>
                <Link to="/login">Vous n'êtes pas connecté</Link>
            </div>
        ) : (
            <div className={classes.root}>
                <Grid container spacing={3} 
                    justify="center" 
                    alignItems="center" 
                    direction="column">


                    <Avatar justify="center" src="/static/images/avatar/1.jpg" alt="Remy Sharp" className={classes.large} />
                    <Typography gutterBottom variant="h5" component="h2" className={classes.pseudo}>
                        {userData.pseudo}
                    </Typography>
                    <Logout/>
                        <Grid container  
                        justify="center" 
                        alignItems="center" 
                        direction="column"
                        className={classes.root1}
                        >
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant='h5' style={{ color: "#e1701a" }}>
                                    Informations du compte:
                                </Typography>
                                <Typography component="h6" style={{ color: "#ffcd3c", marginTop: 10 }}>
                                    E-Mail: {userData.email}
                                </Typography>
                                <Typography component="h6" style={{ color: "#ffcd3c" }}>
                                    Pseudo: {userData.pseudo}
                                </Typography>
                            </Paper>
                </Grid>
                </Grid>
            </div>
        );
}