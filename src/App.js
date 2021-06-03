import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import store from "./Redux/store";
import { Provider } from "react-redux";

import Home from "./Components/Home/Home.js";
import ShopCard from "./Components/ShopCard/ShopCard.js";
import SpaceTravel from "./Components/SpaceTravel/SpaceTravel";
import HeavenTravel from "./Components/HeavenHellTravel/HeavenTravel";
import TimeTravel from "./Components/TimeTravel/TimeTravel.js";
import Navigation1 from "./Navigation1";
import Profile from "./Components/Profile/Profile";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login.js";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.js";
import OffersPage from "./Components/OffersPage/OffersPage.js";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Provider store={store}>

      <div className="App">
        
          <Router>

            <Navigation1 />
          
              <Route exact path="/" component={Home} />
              <Route path="/heaven-travel" component={HeavenTravel} />
              <Route path="/space-travel" component={SpaceTravel} />
              <Route path="/shop-card/:productId" component={ShopCard} />
              <Route path="/time-travel" component={TimeTravel} />
              <Route path="/offers-page" component={OffersPage} />
              <Route path="/shopping-cart" component={ShoppingCart} />
              <Route path="/profile" component={Profile} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forget-password" component={ForgetPassword} />

          </Router>

      </div>

      <Footer/>

    </Provider>
  );
}

export default App;
