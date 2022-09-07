import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import SpaceTravel from "../Images/SpaceTravel.jpg";
import TimeTravel from "../Images/TimeTravel.jpg";
import Background2 from "../Images/stars01.jpg";

const images = [
    {
        src: `${SpaceTravel}`,
        title: 'Cosmos',
        width: '50%',
        link: "/space-travel"
    },
    {
        src: `${TimeTravel}`,
        title: 'Temps',
        width: '50%',
        link: "/time-travel"
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        minWidth: 300,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background2})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    image: {
        position: 'relative',
        height: "100vh",
        [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
        },
        '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
            opacity: 0.15,
        },
        '& $imageMarked': {
            opacity: 0,
        },
        '& $imageTitle': {
            border: '4px solid currentColor',
        },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#ffa62b",
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        fontSize: 20,
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: "#ffa62b",
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {

    const classes = useStyles();
    
return (
        <div className={classes.root}>
            {images.map((image) => (
                <ButtonBase
                component={ Link } 
                to={image.link}
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: image.width,
                }}>
                    <span
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${image.src})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}>
                            {image.title}
                        <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div>
        );
}
