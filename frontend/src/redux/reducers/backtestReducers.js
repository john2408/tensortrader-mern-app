import * as actionTypes from "../constants/backtestConstants";

export const getBacktestsReducer = (state = {backtests: []}, action) => {
    switch(action.type){
        case actionTypes.GET_BACKTESTS_REQUEST:
            return{
                loading: true,
                backtests: []
            };
        case actionTypes.GET_BACKTESTS_SUCCESS:
            return{
                loading: false, 
                backtests: action.payload
            };
        case actionTypes.GET_BACKTESTS_FAIL:
            return{
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    };
} ;

export const getBacktestDetailsReducer = (state = {backtest: []}, action) => {
    switch(action.type){
        case actionTypes.GET_BACKTEST_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_BACKTEST_DETAILS_SUCCESS:
            return{
                loading: false,
                backtest: action.payload,
            };
        case actionTypes.GET_BACKTEST_DETAILS_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                };
        case actionTypes.GET_BACKTEST_DETAILS_RESET:
            return{
                backtest : []
            };
        default:
            return state;

    };
};