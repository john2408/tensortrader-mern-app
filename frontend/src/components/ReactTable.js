import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {getTableHeaders} from "./utils.js";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

/*
  const headers = [
    'trading_session_id',
    'tradeid',
    'trade_orderID',
    'trade_qty',
    'trade_base_unit',
    'trade_profit',
    'trade_entry_time',
    'trade_entry_price',
    'cum_profits',
    'signal',
    'side'
  ];
*/

const ReactTable = ({chart_id, trade_info}) => {

  const headers = getTableHeaders(trade_info);

  console.log("Data is: ")
  console.log(trade_info)


  return (
    <TableContainer component={Paper} key = {chart_id} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
              {headers.map( (head) => 
                      <StyledTableCell key = {head}>
                      {head}
                      </StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {trade_info.map((row) => (
            <StyledTableRow key={row.trade_orderID}>
              <StyledTableCell component="th" scope="row">{row.trading_session_id}</StyledTableCell>
              <StyledTableCell align="right">{row.tradeid}</StyledTableCell>
              <StyledTableCell align="right">{row.trade_orderID}</StyledTableCell>
              <StyledTableCell align="right">{row.trade_qty}</StyledTableCell>
              <StyledTableCell align="right">{row.trade_base_unit}</StyledTableCell>
              <StyledTableCell align="right">{row.trade_profit}</StyledTableCell>
              <StyledTableCell align="right">{row.trade_entry_time}</StyledTableCell>
              <StyledTableCell align="right">{row.trade_entry_price}</StyledTableCell>
              <StyledTableCell align="right">{row.cum_profits}</StyledTableCell>
              <StyledTableCell align="right">{row.signal}</StyledTableCell>
              <StyledTableCell align="right">{row.side}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReactTable;
