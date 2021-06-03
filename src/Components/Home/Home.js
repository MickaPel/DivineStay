import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Background from "../Images/BackgroundSpace.jpg";
import TypingComponent from "../TextPresentation/TypingComponent.js";
import "../TextPresentation/typing-component.css";


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
    },
    button2: {
        color: "#a20a0a",
        fontFamily: 'vt323regular',
        fontSize: "28px",
        top: "5%",
        borderColor: "#a20a0a",
        borderWidth: 3,
        marginTop: 20
    },
    button3: {
        color: "#a20a0a",
        fontFamily: 'vt323regular',
        fontSize: "28px",
        borderColor: "#a20a0a",
        borderWidth: 3,
    }
});



export default function Home() {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:400px)');
    const matches2 = useMediaQuery('(min-width:900px)');

    const TypingComponentStyles1 = {
        top: matches ? "58%" : "40%",
        position: "absolute",
        textAlign: "start",
        width: matches2 ? "30%" : "95%",
        left: "2%",
        fontFamily: 'vt323regular',
        fontSize: "22px",
        color: matches2 ? "#18c701" : "black"
    }

    const textArrayOne = [
        "Embarquement immédiat vers les rêves les plus fous, les images les plus romantiques, les bleus les plus merveilleux. ",
        "DivineStay est une agence à forte notoriété dans la création de voyages à thème. ",
        "C’est aussi tout un réseau d’hommes et de femmes, riches d’expériences et de connaissances qui assurent pour vous l’accompagnement de tous ces voyages. ",
        "Embarquez à bord de notre SpaceWagon spécialement conçu pour découvrir les merveilles qui nous entourent."
    ];

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
                    variant="contained"
                >
                    <Button 
                            // variant="outlined" 
                            color="primary" 
                            component={ Link } 
                            to="/sign-up"
                            className={classes.button1}
                    >
                                            Inscription
                    </Button>
                    <Button
                            color="primary" 
                            component={ Link } 
                            to="/login"
                            className={classes.button1}
                    >
                                            Connexion
                    </Button>
                    <Button
                            color="primary" 
                            component={ Link } 
                            to="/offers-page"
                            className={classes.button1}
                    >
                                            Etude des offres
                    </Button>
                </ButtonGroup>
            <TypingComponent
                classString="assign-as-many classes-as-you-want here"
                text1={textArrayOne}
                //add text2 if you want self deleting effect after typing the first phrase
                // text2={textArrayTwo}
                typingContentElementId="give-your-component-an-element-id-to-reference"
                styles={TypingComponentStyles1}
            />
        </Grid>
    </div>
);
}