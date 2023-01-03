const Backtest = require('../models/Backtest');
const connectMDB = require('../config/db_client');
const DB_tensor_models = connectMDB.useDb('tensor_models');
const DB_trade_execution = connectMDB.useDb('Trading_Execution');

// Read Object by ID of already created collection 
// https://www.codegrepper.com/code-examples/javascript/mongo+db+getById+js
const ObjectId = require('mongodb').ObjectId;
  

const getAllBacktests = async (req, res) => {
    try {
        
        
        const collection  = await DB_tensor_models.db.collection("backtesting");
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

        const collection = await DB_tensor_models.db.collection("backtesting");
        collection.find({_id: backtest_id}).toArray(function(err, backtest){
            //console.log(backtest); 
            res.json(backtest);
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
        
    }
}

const getAllTradeExecution = async (req, res) => {
    try {
        
        let symbol = req.params.id
        const collection  = await DB_trade_execution.db.collection(symbol);
        collection.find({}).toArray(function(err, trades){
            //console.log(trades); 
            res.json(trades);
        });

        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
        
    }
}

const getTradeDetails  = async (req, res) => {
    try {

        let id = req.params.id.split('-')[0]
        let symbol = req.params.id.split('-')[1]
        console.log(req.params.id)

        let trade_id = new ObjectId(id);

        const collection = await DB_trade_execution.db.collection(symbol);
        collection.find({_id: trade_id}).toArray(function(err, trade_info){
            //console.log(trade_info); 
            res.json(trade_info);
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
        
    }
}

module.exports = {
    getAllBacktests,
    getBacktestById, 
    getAllTradeExecution, 
    getTradeDetails
}