import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import 'react-awesome-slider/dist/styles.css';
import "../../Slider.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Background2 from "../Images/BackGStars.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 25,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    maxWidth: "75%",
    marginTop: 25,
    marginBottom: 25,
    width: 400,
    minWidth: 300,
  },
  paper2: {
    padding: theme.spacing(2),
    color: theme.palette.text.initial,
    backgroundColor: "#e1bc91",
    textAlign: 'center',
    fontFamily: 'Goldman',
    fontSize: 15
  },
  title: {
    paddingTop: 20
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Goldman',
      'cursive',
    ].join(','),
  },});

export default function SpaceTravel(props) {
  const classes = useStyles();

  const offers = useSelector(state => state.cartItems.products);

  const spaceOffers = offers.filter(categorie => categorie.categorie === "Space");

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Grid 
          container 
          justify="center" 
          alignItems="center" 
          direction="column">
            {Array.isArray(spaceOffers) &&
                  spaceOffers.map(forecast => (            
                <Card className={classes.paper}
                      style={{backgroundColor: "#e5e5e5"}}>
                  <CardActionArea>
                  <Link to={`/shop-card/${forecast.name}`} style={{ textDecoration: "none" }}>
                    <div>
                      <Carousel autoPlay 
                        showThumbs={false} 
                        infiniteLoop={true} 
                        showStatus={false} 
                        transitionTime={2000}>
                          <div>
                            <img alt="" src={forecast.image1} height={"250"}/>
                          </div>
                          <div>
                            <img alt="" src={forecast.image2} height={"250"}/>
                          </div>
                          <div>
                            <img alt="" src={forecast.image3} height={"250"}/>
                          </div>
                      </Carousel>
                    </div>
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {forecast.name}
                          </Typography>
                      </CardContent> 
                      </Link>              
                  </CardActionArea>
                </Card>
            ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}