import * as actionTypes from "../constants/tradeConstants";

export const getTradesReducer = (state = {trades: []}, action) => {
    switch(action.type){
        case actionTypes.GET_TRADES_REQUEST:
            return{
                loading: true,
                trades: []
            };
        case actionTypes.GET_TRADES_SUCCESS:
            return{
                loading: false, 
                trades: action.payload
            };
        case actionTypes.GET_TRADES_FAIL:
            return{
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    };
} ;

export const getTradeDetailsReducer = (state = {trade: []}, action) => {
    switch(action.type){
        case actionTypes.GET_TRADE_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_TRADE_DETAILS_SUCCESS:
            return{
                loading: false,
                trade: action.payload,
            };
        case actionTypes.GET_TRADE_DETAILS_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                };
        case actionTypes.GET_TRADE_DETAILS_RESET:
            return{
                trade : []
            };
        default:
            return state;

    };
};