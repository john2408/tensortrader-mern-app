import * as actionTypes from "../constants/tradeConstants";
import axios from "axios";

export const getTrades = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_TRADES_REQUEST });

    const { data } = await axios.get(`/api/backend/trading/${id}`);

    // console.log("I am inside getTrades Action")
    // console.log(data)

    dispatch({
      type: actionTypes.GET_TRADES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TRADES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTradeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_TRADE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/backend/trading-details/${id}`);

    console.log("I am inside getTradeDetails Action");
    console.log(data);

    dispatch({
      type: actionTypes.GET_TRADE_DETAILS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TRADE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeTradeDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_TRADE_DETAILS_RESET });
};