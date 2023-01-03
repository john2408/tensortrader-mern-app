import React from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
import "./Table.css";
import {parseTableHeaders, parsetoTablelist, getTableHeaders, getColors} from "./utils.js";

//ref https://plotly.com/javascript/table/
// https://plotly.com/javascript/table/
const Table = ({chart_id, trade_info, main_screen} ) => {
    
  let headerColor = "grey";
  let rowEvenColor = "lightgrey";
  let rowOddColor = "white";

  // Get Headers
  let headers = getTableHeaders(trade_info);
  let custom_headers = parseTableHeaders(headers);

  // Get table data
  let values = parsetoTablelist(trade_info, headers);

  // Get row colors
  let n_rows = values.length -1 ;
  let colors = getColors(n_rows, rowEvenColor, rowOddColor);

  /*
  let headers = [["<b>EXPENSES</b>"], ["<b>Q1</b>"],
          ["<b>Q2</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]];
  
  let colors = [[rowOddColor,rowEvenColor,rowOddColor,
    rowEvenColor,rowOddColor]];

  let values = [
    ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
    [1200000, 20000, 80000, 2000, 12120000],
    [1300000, 20000, 70000, 2000, 130902000],
    [1300000, 20000, 120000, 2000, 131222000],
    [1400000, 20000, 90000, 2000, 14102000]];
    */
    
  let data = [{
    type: 'table',
    header: {
      values: custom_headers,
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: headerColor},
      font: {family: "Arial", size: 12, color: "white"}
    },
    cells: {
      values: values,
      align: "center",
      line: {color: "black", width: 1},
      fill: {color: colors},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
  }]
              
  
  return (
    main_screen ? <div className='chart__maincontainer'>
             <div>
                <Plot
                  data={data}
                  useResizeHandler = {true}
                  className = "chart__container"
                />
              </div>
            </div>
          : 
            <div className='chart__maincontainer'>
              <div>
                  <Plot
                    data={data}
                    useResizeHandler = {true}
                    className = "chart__container"
                  />
                </div>
            </div>
    
    
  )
}

export default Table;