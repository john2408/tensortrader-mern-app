import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers 
import {cartReducer} from './reducers/cartReducers';
import { getBacktestDetailsReducer, getBacktestsReducer } from './reducers/backtestReducers';
import { getTradeDetailsReducer, getTradesReducer } from './reducers/tradeReducers';


const reducer = combineReducers({
    cart: cartReducer,
    getBacktests: getBacktestsReducer,
    getBacktestDetails: getBacktestDetailsReducer,
    getTrades: getTradesReducer, 
    getTradeDetails: getTradeDetailsReducer
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

// CreateStore is an example of a High Order Function
const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;