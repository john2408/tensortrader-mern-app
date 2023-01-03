import * as actionTypes from "../constants/backtestConstants";
import axios from "axios";

export const getBacktests = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_BACKTESTS_REQUEST });

    const { data } = await axios.get("/api/backend/backtest/");

    // console.log("I am inside getBacktests Action")
    // console.log(data)

    dispatch({
      type: actionTypes.GET_BACKTESTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_BACKTESTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBacktestDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_BACKTEST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/backend/backtest/${id}`);

    console.log("I am inside getBacktestDetails Action");
    console.log(data);

    dispatch({
      type: actionTypes.GET_BACKTEST_DETAILS_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: actionTypes.GET_BACKTEST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeBacktestDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_BACKTEST_DETAILS_RESET });
};