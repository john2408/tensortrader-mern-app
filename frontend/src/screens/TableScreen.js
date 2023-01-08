import './TableScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import ReactTable from '../components/ReactTable';

//Actions
import {getTrades as listTrades} from '../redux/actions/tradeActions';

const TableScreen = ({match}) => {

  const dispatch = useDispatch();

  const getTrades = useSelector((state) => state.getTrades)
  const {trades, loading, error} = getTrades;

  //let id = 'BTCUSDT'
  let id = match.params.id

  if(id == '' || id == null){
    id = 'BTCUSDT';
  }
  
  useEffect(() => {
    dispatch(listTrades(id));
  }, [dispatch, id] );

  console.log(`Getting Trade Data for ${id}`);

  // [ 'BTCUSDT', 'ETHUSDT', 'LTCUSDT',  'ADAUSDT','BNBUSDT', 'BNBBTC' , 'EOSUSDT', 'ETCUSDT',
  // 'XMRBTC', 'TRXUSDT', 'XLMUSDT', 'IOTAUSDT',
  // 'MKRUSDT', 'DOGEUSDT']
  return <div className='homescreen'>
              <h2 className = "homescreen__title">Binance Bots</h2>
              <div className = "tablescreen__buttons">  
                <Link to={`/trading/BTCUSDT`} className='info__button'> BTCUSDT</Link>
                <Link to={`/trading/ETHUSDT`} className='info__button'> ETHUSDT</Link>
                <Link to={`/trading/LTCUSDT`} className='info__button'> LTCUSDT</Link>
                <Link to={`/trading/ADAUSDT`} className='info__button'> ADAUSDT</Link>
              </div>
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

