import React, { Component} from "react";

import AddNewItem from '../addNewItem';
import ItemsTable from '../itemsTable';
import BarCodeInputField from '../barCodeInputField';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [
      {name: 'dummy1', mrp: 30, sp: 20, quantity: 1},
      {name: 'dummy2', mrp: 30, sp: 20, quantity: 1}
    ] };
    this.onAddNewItem = this.onAddNewItem.bind(this);
    this.onBarCodeScanned = this.onBarCodeScanned.bind(this);
  }

  onAddNewItem(item){
    this.setState({items: [...this.state.items, item]});
  }

  onBarCodeScanned(code){
    this.onAddNewItem({name: code, mrp: 31, sp: 21, quantity: 12});
  }

  render() {
    return (
      <div onMouseDown={(e) => e.preventDefault() }>
        <AddNewItem onAdd={this.onAddNewItem} />
        <ItemsTable items={this.state.items} />
        <BarCodeInputField onScanComplete={this.onBarCodeScanned}/>
      </div>
    );
  }
}
