import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { travelReducer } from "./Products/reducerTravel";
import { cartItemReducer } from "./Products/reducerCart";

const rootReducer = combineReducers({
    travels: travelReducer,
    cartItems: cartItemReducer
})



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;