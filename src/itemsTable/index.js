import React, { Component} from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import "./styles.css";

export default class ItemsTable extends Component {
  render() {
    return (
      <Paper className="itemsTablePaper">
        <Table className="itemsTable">
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} align="center">BILL</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">MRP</TableCell>
              <TableCell align="right">SP</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">{item.name}</TableCell>
                  <TableCell align="right">{item.mrp}</TableCell>
                  <TableCell align="right">{item.sp}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
