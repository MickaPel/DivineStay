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

import Background2 from "../Images/BackGStars.jpg";

import Slider from 'infinite-react-carousel';

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

  const settings =  {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    duration: 500
  };

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
                    <div key={forecast.id} className={classes.paper}>           
                      <Card style={{backgroundColor: "#E6D2AA"}}>
                        <CardActionArea>
                          <Link to={`/shop-card/${forecast.name}`} style={{ textDecoration: "none" }}>
                            <Slider { ...settings }>
                              <div>
                                <img alt="" src={forecast.image1} height={"250"} width={400}/>
                              </div>
                              <div>
                                <img alt="" src={forecast.image2} height={"250"} width={400}/>
                              </div>
                              <div>
                                <img alt="" src={forecast.image3} height={"250"} width={400}/>
                              </div>
                            </Slider>
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    {forecast.name}
                                  </Typography>
                              </CardContent> 
                          </Link>              
                        </CardActionArea>
                      </Card>
                    </div> 
            ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}