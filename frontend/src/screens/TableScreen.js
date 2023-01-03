import './TableScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Table from '../components/Table';
import ReactTable from '../components/ReactTable';

//Actions
import {getTrades as listTrades} from '../redux/actions/tradeActions';

const TableScreen = () => {

  const dispatch = useDispatch();

  const getTrades = useSelector((state) => state.getTrades)
  const {trades, loading, error} = getTrades;

  let id = 'BTCUSDT'
  
  useEffect(() => {
    dispatch(listTrades(id));
  }, [dispatch, id] );

  console.log(`Getting Trade Data for ${id}`);

  const main_screen = true

  /*

  

          <Table 
            chart_id = {id}
            trade_info = {trades}
            main_screen = {main_screen}
            />
  */

  return <div className='homescreen'>
              <h2 className = "homescreen__title">Binance Bots</h2>
              <div className='homescreen__chart'>
                <div className = "homescreen__backtests">
                  {loading ? <h2>Loading...</h2> 
                    : error ? <h2> {error} </h2>
                    :   
                    <ReactTable
                      key = {id}
                      chart_id = {id}
                      trade_info = {trades}
                    /> 
                  }   
                </div>   
              </div>              
              
          </div>
};

export default TableScreen;

