const express = require('express');
const router = express.Router();

const {getAllBacktests, getBacktestById, getAllTradeExecution, getTradeDetails} = require('../controller/backendControllers');

//@desc     GET all backtests data from mongo db
//@route    GET /api/backend/backtest
//@access    Public
router.get('/backtest/', getAllBacktests);

//@desc     GET a backtest data by id from db
//@route    GET /api/backend/backtest/:id
//@access    Public
router.get('/backtest/:id', getBacktestById);

//@desc     GET all trade details from mongo db
//@route    GET /api/backend/trading/:id
//@access    Public
router.get('/trading/:id', getAllTradeExecution);

//@desc     GET a trade data by id from db
//@route    GET /api/backend/trading/:id
//@access   Public
router.get('/trading-details/:id', getTradeDetails);

    
module.exports = router;