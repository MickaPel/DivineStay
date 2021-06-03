import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddle from "redux-saga";
import { travelReducer } from "./Products/reducerTravel";
import { cartItemReducer } from "./Products/reducerCart";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
    travels: travelReducer,
    cartItems: cartItemReducer
})

const sagaMiddleware = createSagaMiddle();


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;