const express = require('express');
const router = express.Router();

const {getAllBacktests, getBacktestById} = require('../controller/backtestControllers');

//@desc     GET all prodtucs from mongo db
//@route    GET /api/backtesting
//@acces    Public
router.get('/', getAllBacktests);

//@desc     GET a product by id from db
//@route    GET /api/backtesting/:id
//@acces    Public
router.get('/:id', getBacktestById);

    
module.exports = router;