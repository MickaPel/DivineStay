import React, { useState, useEffect } from 'react';
import {Link, withRouter, useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import clsx from 'clsx';

import { useSelector } from "react-redux";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import StarIcon from '@material-ui/icons/Star';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Badge from '@material-ui/core/Badge';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "auto"
    },
    menuButton1: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'vt323regular',
        fontSize: "40px",
        textAlign: "center",
        color: "#ffcd3c",
        textDecoration: "none"
    },
    link: {
        textDecoration: "none"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },  
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#30475e',
        color: "#f2d974"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
}));


function Navigation1(props) {
    const classes = useStyles();
    let history = useHistory();

    const [open, setOpen] = useState(false);
    

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const itemList = [
        {
            text: "Acceuil",
            icon: <HomeIcon color="primary" style={{fill: "#ffcd3c"}} />,
            onClick: () => history.push("/")
        },
        {
            text: "Voyages Spatiaux",
            icon: <StarIcon color="primary" style={{fill: "#ffcd3c"}} />,
            onClick: () => history.push("/space-travel")
        },
        {
            text: "Voyages Temporels",
            icon: <HourglassEmptyIcon color="primary" style={{fill: "#ffcd3c"}} />,
            onClick: () => history.push("/time-travel")
        },
        {
            text: "Profil",
            icon: <AccountCircleIcon style={{fill: "#ffcd3c"}}/>,
            onClick: () => history.push("/Profile"),
        }
    ];

    const cartItems = useSelector(state => state.cartItems.cart);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
        });

        setCartCount(count);
    }, [cartItems, cartCount])

return (
    <div className={classes.root}>
        <AppBar position="static" style={{ background: '#30475e' }} 
            className={clsx(classes.appBar, {[classes.appBarShift]: open,
            })}>
            <Toolbar>
                <ClickAwayListener onClickAway={handleDrawerClose}>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="open drawer" 
                        onClick={handleDrawerOpen}>
                        <MenuIcon style={{fill: "#ffcd3c"}}/>
                    </IconButton>
                </ClickAwayListener>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                        paper: classes.drawerPaper,
                        }}>
                        <List>
                            {itemList.map((item, index) => {
                                const { text, icon, onClick } = item;
                                return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                            )})}
                        </List>
                    </Drawer>
                <Typography variant="h6" className={classes.title} component={Link} to={"/"}>
                    DivineStay
                </Typography>
                <Badge badgeContent={cartCount} color="secondary">
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        component={Link} 
                        to={"/shopping-cart"}>
                        <ShoppingCartIcon style={{fill: "#ffcd3c"}}/>
                    </IconButton>
                </Badge>
            </Toolbar>
        </AppBar>
    </div>
);
}

export default withRouter(Navigation1);