import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Background from "../Images/BackgroundSpace.jpg";
import "../TextPresentation/typing-component.css";

import AnimatedText from 'react-animated-text-content';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    grid: {
        paddingTop: 20
    },
    button1: {
        color: "#ffcd3c",
        fontFamily: 'vt323regular',
        fontSize: "28px",
        background: '#30475e'
    }
});

export default function Home() {

    const classes = useStyles();

    const matches2 = useMediaQuery('(min-width:900px)');

    const TypingComponentStyles1 = {
        top: matches2 ? "58%" : "40%",
        position: "absolute",
        textAlign: "start",
        width: matches2 ? "30%" : "80%",
        left: "2%",
        fontFamily: 'vt323regular',
        fontSize: "22px",
        color: matches2 ? "#18c701" : "black"
    }

    const TypingComponentStyles2 = {
        paddingTop: "15%",
        width: "80%",
        margin: 'auto',
        fontFamily: 'vt323regular',
        fontSize: "22px",
        color: "#EB1D36"
    }

return (
    <div className={classes.root}> 
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.grid}
        >
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical contained primary button group"
                    variant="contained">
                    <Button  
                            color="primary" 
                            component={ Link } 
                            to="/sign-up"
                            className={classes.button1}>
                            Inscription
                    </Button>
                    <Button
                            color="primary" 
                            component={ Link } 
                            to="/login"
                            className={classes.button1}>
                            Connexion
                    </Button>
                    <Button
                            color="primary" 
                            component={ Link } 
                            to="/offers-page"
                            className={classes.button1}>
                            Etude des offres
                    </Button>
                </ButtonGroup>
        </Grid>
        <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="float"
            interval={0.02}
            duration={1}
            tag="p"
            className="animated-paragraph"
            style={matches2 ? TypingComponentStyles1 : TypingComponentStyles2}
            includeWhiteSpaces
            threshold={0.1}
            >
            Embarquement immédiat vers les rêves les plus fous, les images les plus romantiques, les bleus les plus merveilleux.
            DivineStay est une agence à forte notoriété dans la création de voyages à thème.
            Embarquez avec nous dans des séjours incroyables à travers l'espace et le temps.
        </AnimatedText>
    </div>
);
}