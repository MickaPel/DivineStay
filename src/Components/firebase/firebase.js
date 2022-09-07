import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyAoXDWzq_7Rc-8AhCB8zNcpKwib7FgzBYo",
    authDomain: "divinestay-b4eee.firebaseapp.com",
    databaseURL: "https://divinestay-b4eee.firebaseio.com",
    projectId: "divinestay-b4eee",
    storageBucket: "divinestay-b4eee.appspot.com",
    messagingSenderId: "832597021128",
    appId: "1:832597021128:web:0232d215234e0066e770fd",
    measurementId: "G-K81QV5LDV3"
};

class Firebase {
    constructor(){
        app.initializeApp(config);
        //authentification
        this.auth = app.auth();
        //DataBase
        this.db = app.firestore();
        this.storage = app.storage();
    }

    // inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // conexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // deconexion
    signOutUser = () => this.auth.signOut();

    // recupérer mot de passe
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

    //id utilisateur
    user = uid => this.db.doc(`users/${uid}`);
};

export default Firebase;