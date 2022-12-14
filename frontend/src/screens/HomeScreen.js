import './HomeScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Banner from '../components/Banner';
import Chart from '../components/Chart';

//Actions
import {getBacktests as listBacktests} from '../redux/actions/backtestActions'

const HomeScreen = () => {

  const dispatch = useDispatch();

  const getBacktests = useSelector((state) => state.getBacktests)
  const {backtests, loading, error} = getBacktests;

  useEffect(() => {
    dispatch(listBacktests());
  }, [dispatch] );

  console.log("Getting Backtest Data");

  function parseToDate(string_date){
    return new Date( Date.parse(string_date) );
  } 

  const main_screen = true

  return <div className='homescreen'>
              <Banner/>
              <h2 className = "homescreen__title">Tensor Home</h2>
              <div className='homescreen__chart'>
                <div className = "homescreen__backtests">
                  {loading ? <h2>Loading...</h2> 
                    : error ? <h2> {error} </h2>
                    : 
                      backtests.map(bt => (
                        <Chart 
                        key = {bt._id}
                        chart_id = {bt._id}
                        main_screen = {main_screen}
                        title = {bt.run_id}
                        x = {bt.backtest.Date.map(parseToDate)}
                        y1 = {bt.backtest.ml_strategy.map(Number)}
                        y2 = {bt.backtest.ml_strategy_adj.map(Number)}
                        y3 = {bt.backtest.buy_hold.map(Number)}
                        />
                      ) )          
                  }   
                </div>   
              </div>              
              
          </div>
};

export default HomeScreen;

