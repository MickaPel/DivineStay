import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: 30,
        background: '#30475e',
    },
    root2: {
        flexGrow: 1,
        width: "100%",
        height: 75,
        background: '#30475e',
    },
    footer: {
        background: '#30475e',
        width: "100%",
        height: "100%",
        paddingTop: 10
    },
    text1: {
        marginLeft: 10
    },
    text2: {
        marginRight: 10
    }

}));

export default function Footer () {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:700px)');

    const grid = matches ? <div className={classes.root}>
                                <Paper className={classes.footer}>
                                    <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                    >
                                        <Typography component="h6" className={classes.text1}>
                                            divinestay6@gmail.com
                                        </Typography>
                                        <Typography component="h6">
                                            "Le voyage est le printemps du coeur."
                                        </Typography>
                                        <Typography component="h6" className={classes.text2}>
                                            &copy; DivineStay, 2021
                                        </Typography>
                                    </Grid>
                                </Paper>
                            </div>
                        : <div className={classes.root2}>
                                <Paper className={classes.footer}>
                                    <Grid
                                    container
                                    direction="column"
                                    justify="space-evenly"
                                    alignItems="center"
                                    >
                                        <Typography component="h6">
                                            divinestay6@gmail.com
                                        </Typography>
                                        <Typography component="h6">
                                            "Le voyage est le printemps du coeur."
                                        </Typography>
                                        <Typography component="h6">
                                            &copy; DivineStay, 2021
                                        </Typography>
                                    </Grid>
                                </Paper>
                            </div>

    return (
        // <div className={classes.root}>
        //     <Paper className={classes.footer}>
        //         <Grid
        //         container
        //         direction="row"
        //         justify="space-between"
        //         alignItems="center"
        //         >
        //             <Typography component="h6">
        //                 DivineStay@gmail.com
        //             </Typography>
        //             <Typography component="h6">
        //                 "Le voyage est le printemps du coeur."
        //             </Typography>
        //             <Typography component="h6">
        //                 &copy; DivineStay, 2021
        //             </Typography>
        //         </Grid>
        //     </Paper>
            
        // </div>
        <div>{grid}</div>
        
    );
};

