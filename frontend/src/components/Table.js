import React from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
import "./Table.css";

const Table = ({chart_id, title, x, y1, y2, y3, main_screen} ) => {
  
  let values = [
    ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
    [1200000, 20000, 80000, 2000, 12120000],
    [1300000, 20000, 70000, 2000, 130902000],
    [1300000, 20000, 120000, 2000, 131222000],
    [1400000, 20000, 90000, 2000, 14102000]]


  let trace1 = { 
                x: x,
                y: y1,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'rgb(32, 81, 179)'},
                name: 'ML Strategy'
              }

  let trace2 = {
                x: x,
                y: y2,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'rgb(9, 166, 140)'},
                name: 'ML Strategy Adj'
              }
  
  let trace3 = {
                x: x,
                y: y3,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'rgb(115, 115, 115)'},
                name: 'Buy and Hold'
              }

              // width: width, 
              // height: height, 
  let layout = {
                title: title,
                autosize: true,
                yaxis: {
                  title: 'Return',
                  showline: false
              
                },
                
                showlegend: true,

                // legend: {
                //   "orientation": "h"
                // }
                
                legend: {

                  x: 0.25,
              
                  y: -0.5,
              
                  traceorder: 'normal',
              
                  font: {
              
                    family: 'sans-serif',
              
                    size: 12,
              
                    color: '#000'
              
                  },
              
                  bgcolor: '#E2E2E2',
              
                  bordercolor: '#FFFFFF',
              
                  borderwidth: 2
              
                }
              
              } 
              
  
  return (
    main_screen ? <div className='chart__maincontainer'>
             <div>
                <Plot
                  data={[ trace1, trace2, trace3]}
                  layout={ layout }
                  useResizeHandler = {true}
                  className = "chart__container"
                />
              </div>
              <div>
                  <Link to={`/backtest/${chart_id}`} className = "chart__detailslink">  Details View </Link>
              </div>
            </div>
          : 
            <div className='chart__maincontainer'>
              <div>
                  <Plot
                    data={[ trace1, trace2, trace3]}
                    layout={ layout }
                    useResizeHandler = {true}
                    className = "chart__container"
                  />
                </div>
            </div>
    
    
  )
}

export default Table