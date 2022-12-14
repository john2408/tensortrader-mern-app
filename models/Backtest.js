const mongoose = require('mongoose');

const BacktestSchema = mongoose.Schema({ 


    run_id: {type: String, required: true},
    ticker:  {type: String, required: true}, 
    ptsl: {type: Array, required: true},
    v_barrier_minutes: {type: Number, required: true},
    span_volatility: {type: Number, required: true},
    model_name: {type: String, required: true},
    model_name : {type: String, required: true}, 
    model_params: { learning_rate : {type: Number, required: true},
                        max_depth : {type: Number, required: true},
                        n_estimators : {type: Number, required: true}
                    },

    feature_importance : {top_feature_names: {type: Array, required: true}, 
                        top_feature_importances: {type: Array, required: true}}, 

    backtest: {Date: {type: Array, required: true},
                ml_strategy: {type: Array, required: true},
                ml_strategy_adj: {type: Array, required: true},
                pred: {type: Array, required: true},                      
                }

});


const Backtest = mongoose.model("backtesting", BacktestSchema);

module.exports = Backtest;