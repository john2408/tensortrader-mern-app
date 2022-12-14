import './ChartScreen.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from '../components/Chart';
import { Link } from 'react-router-dom';

// Actions
import { getBacktestDetails} from '../redux/actions/backtestActions';

const ChartScreen = ({match}) => {

    const dispatch = useDispatch();
    
    const backtestDetails = useSelector((state) => state.getBacktestDetails);
    const {loading, error, backtest} = backtestDetails;

    console.log(loading)
    console.log(backtest)
    
    
    useEffect(() => {   
        dispatch(getBacktestDetails(match.params.id));  
    }, [dispatch, match.params.id]);
    

    function parseToDate(string_date){
        return new Date( Date.parse(string_date) );
      } 

    const main_screen = false;

    return <div className='productscreen'>

                {loading ? <h2 className='loading__animation'>Loading...</h2> 
                : error ?  <h2>{error}</h2> 
                : 
                    backtest.map(bt => (
                        <div className = "productscreen" key = {bt._id}>
                            <div className = "productscreen__left" >
                            
                                <div className = "left__image" >
                                    <Chart 
                                        className = "left__chart"
                                        key = {bt._id}
                                        chart_id = {bt._id} 
                                        title = {bt.run_id}
                                        main_screen = {main_screen}
                                        x = {bt.backtest.Date.map(parseToDate)}
                                        y1 = {bt.backtest.ml_strategy.map(Number)}
                                        y2 = {bt.backtest.ml_strategy_adj.map(Number)}
                                        y3 = {bt.backtest.buy_hold.map(Number)}
                                    /> 
                                                
                                </div>

                                <div className= "left__info">
                                    <p className= "left__name"> Model Name: <span className='left__infoprop'>{bt.model_name}</span> </p>
                                    <p className= "left__name"> Ticker : <span className='left__infoprop'> {bt.ticker} </span> </p>
                                    <p className= "left__name"> Max Depth : <span className='left__infoprop'>{bt.model_params.max_depth } </span> </p>
                                    <p className= "left__name"> Learning Rate : <span className='left__infoprop'>{bt.model_params.learning_rate}</span> </p>
                                    <p className= "left__name"> N Estimators : <span className='left__infoprop'> {bt.model_params.n_estimators} </span></p>
                                    <p className= "left__name"> Top Features 1-5: <span className='left__infoprop'> {JSON.stringify(bt.feature_importance.top_feature_names.slice(0,5))} </span></p>
                                    <p className= "left__name"> Top Features 5-10: <span className='left__infoprop'> {JSON.stringify(bt.feature_importance.top_feature_names.slice(5,))} </span></p>
                                    
                                </div>
                            </div>

                            <div className="productscreen__right">
                                <div className="right__info">
                                    <p>
                                        
                                    </p>

                                </div>
                            </div>
                            <div>
                                <Link to={`/`} className = "chart__detailslink">  Home </Link>
                            </div>
                        </div>
                    ))                         
                }
            </div>
};

export default ChartScreen;



