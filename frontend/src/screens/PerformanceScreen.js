import './PerformanceScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Chart from '../components/Chart';

//Actions
import {getBacktests as listBacktests} from '../redux/actions/backtestActions'

const PerformanceScreen = () => {

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
              <h2 className = "homescreen__title">Tensor Home</h2>
              <div className='homescreen__chart'>
                <div className = "homescreen__backtests">
                  {loading ? <h2>Loading...</h2> 
                    : error ? <h2> {error} </h2>
                    : 
                      
                      <div><h1>Performance Analysis</h1></div>          
                  }   
                </div>   
              </div>              
              
          </div>
};

export default PerformanceScreen;

