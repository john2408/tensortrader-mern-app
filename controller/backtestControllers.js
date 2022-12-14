const Backtest = require('../models/Backtest');
const connectMDB = require('../config/db_client');

// Read Object by ID of already created collection 
// https://www.codegrepper.com/code-examples/javascript/mongo+db+getById+js
const ObjectId = require('mongodb').ObjectId;
  

const getAllBacktests = async (req, res) => {
    try {
        
        const collection  = await connectMDB.db.collection("backtesting");
        collection.find({}).toArray(function(err, backtests){
            //console.log(backtests); 
            res.json(backtests);
        });


        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
        
    }
}

const getBacktestById = async (req, res) => {
    try {
        
        let backtest_id = new ObjectId(req.params.id);

        const collection = await connectMDB.db.collection("backtesting");
        collection.find({_id: backtest_id}).toArray(function(err, backtest){
            //console.log(backtest); 
            res.json(backtest);
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
        
    }
}

module.exports = {
    getAllBacktests,
    getBacktestById
}