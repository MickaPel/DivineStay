import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import firebaseContext from "../firebase/context";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// // import { config } from "../firebase/firebase";
// // import Firebase from "../firebase/firebase";
// import app from "firebase/app";

// import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Box from '@material-ui/core/Box';
// import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';

import Logout from "../Logout/Logout";
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import BackGround from "../Images/stars01.jpg";


// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`full-width-tabpanel-${index}`}
//             aria-labelledby={`full-width-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//             <Box p={3}>
//                 <Typography>{children}</Typography>
//             </Box>
//             )}
//         </div>
//     );
//     }
    
//     TabPanel.propTypes = {
//         children: PropTypes.node,
//         index: PropTypes.any.isRequired,
//         value: PropTypes.any.isRequired,
//     };

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }

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
        // backgroundColor: "#34656d",
        // width: "80%",
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

    // const [value, setValue] = useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };

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

    // const matches2 = useMediaQuery('(min-width:900px)');

    // const Style = {
    //     width: 375,
    //     backgroundColor: "#34656d",
    // };

    // const db = app.firestore();
    // // const storage = app.storage();
    // var docRef = db.collection("users").doc("username");
//     const [data, setData] = useState([]);
//     useEffect(() => { 
//         docRef.get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//             setUsers(doc.data())
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
// })
    
    // const firebaseData = firebase.data();

    // const app = Firebase.data();
    // const [fileUrl, setFileUrl] = useState(null);
    // const [users, setUsers] = useState([]);

    // const onFileChange = async (e) => {
    //     const file = e.target.files[0]
    //     const storageRef = app.storage().ref()
    //     const fileRef = storageRef.child(file.name)
    //     await fileRef.put(file)
    //     setFileUrl(await fileRef.getDownloadURL())
    // };

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     const username = e.target.username.value;
    //     if(!username){
    //         return
    //     }
    //     db.collection("user").doc(username).set({
    //         name: username,
    //         avatar: fileUrl
    //     })
    // }
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     db.collection("user").doc(fileUrl).set({
    //         avatar: fileUrl
    //     })
        
    // }
    // const onSubmit1 = (e) => {
    //     e.preventDefault()
    //     // db.collection("user").doc(fileUrl).set({
    //     //     avatar: fileUrl
    //     // })
    //     if (!!userSession) {
    //     firebase.user(userSession.uid)
    //     .get()
    //     .then( () => {
    //         return db.collection("user").doc(fileUrl).set({
    //             avatar: fileUrl
    //         })
    //     })
    // }
        
    // }

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const usersCollection = await db.collection("user").get()
    //         setUsers(usersCollection.docs.map(doc => {
    //             return doc.data()
    //         }))
    //     }
    //     fetchUsers()
    // }, [])




    // console.log(fetchUsers);
    
    // const allInputs = {imgUrl: ''};
    // const [imageAsFile, setImageAsFile] = useState('');
    // const [imageAsUrl, setImageAsUrl] = useState(allInputs);

    // console.log(imageAsFile)
    // const handleImageAsFile = (e) => {
    // const image = e.target.files[0]
    //     setImageAsFile(imageFile => (image))
    // }

    // const handleFireBaseUpload = e => {
    //     e.preventDefault()
    //     console.log('start of upload')
    //   // async magic goes here...
    //     if(imageAsFile === '' ) {
    //         console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    //     }
    //     const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    //     //initiates the firebase side uploading 
    //     uploadTask.on('state_changed', 
    //     (snapShot) => {
    //         //takes a snap shot of the process as it is happening
    //         console.log(snapShot)
    //     }, (err) => {
    //         //catches the errors
    //         console.log(err)
    //     }, () => {
    //         // gets the functions from storage refences the image storage in firebase by the children
    //         // gets the download url then sets the image from firebase as the value for the imgUrl key:
    //         storage.ref('images').child(imageAsFile.name).getDownloadURL()
    //         .then(fireBaseUrl => {
    //         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
    //         })
    //     })
    
    // }

    // const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

    // uploadTask.on('state_changed', 
    // (snapShot) => {
    //   //takes a snap shot of the process as it is happening
    //     console.log(snapShot)
    // }, (err) => {
    //   //catches the errors
    //     console.log(err)
    // }, () => {
    //   // gets the functions from storage refences the image storage in firebase by the children
    //   // gets the download url then sets the image from firebase as the value for the imgUrl key:
    //     storage.ref('images').child(imageAsFile.name).getDownloadURL()
    //     .then(fireBaseUrl => {
    //         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
    //     })
    // })
    


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
                        {/* <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={onFileChange}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span" onClick={onSubmit}>
                            Upload
                            </Button>
                        </label> */}


                        
                            {/* {users.map((user) => {
                                return(
                                    <li key={user.name}>
                                        <Avatar justify="center" src={user.avatar} alt="image tag" className={classes.large} />
                                        <p>{user.name}</p>
                                        </li>
                                )
                            })}
                        <form onSubmit={onSubmit1}>
                            <input type="file" onChange={onFileChange} 
                            id="contained-button-file"
                            multiple/>
                            <button variant="contained" color="primary" component="span">Upload image</button>
                        </form> */}


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
                            {/* <AppBar position="static" style={{ background: "#30475e" }}>
                                <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                                >
                                    <Tab style={{ color: "#ffcd3c" }} label="Informations" {...a11yProps(0)} />
                                    <Tab style={{ color: "#ffcd3c" }} label="Mes Commandes" {...a11yProps(1)} />
                                    <Tab style={{ color: "#ffcd3c" }} label="Modes de paiement" {...a11yProps(2)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                            style={{ color: "#ffcd3c" }}
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction} style={{ color: "#ffcd3c" }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        E-Mail: {userData.email}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pseudo: {userData.pseudo}
                                    </Typography>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    Item Three
                                </TabPanel>
                            </SwipeableViews> */}
                </Grid>
                </Grid>
            </div>
        );
}