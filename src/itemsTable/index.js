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
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">1</TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">1</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
