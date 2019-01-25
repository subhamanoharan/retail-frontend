import React, { Component} from "react";
import uuid from 'uuid/v4';

import AddNewItem from '../addNewItem';
import ItemsTable from '../itemsTable';
import BarCodeInputField from '../barCodeInputField';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [
      {code: 'dummy1', name: 'dummy1', mrp: 30, sp: 20, quantity: 1},
      {code: 'dummy2', name: 'dummy2', mrp: 30, sp: 20, quantity: 1}
    ] };
    this.onManuallyItemAdded = this.onManuallyItemAdded.bind(this);
    this.onBarCodeScanned = this.onBarCodeScanned.bind(this);
  }

  _onAddItem(item){
    this.setState({items: [...this.state.items, {...item}]});
  }

  _onUpdateItem(itemToEdit){
    const updatedItems = this.state.items
      .map((item) => ({...(item.code === itemToEdit.code) ? itemToEdit : item}));
    this.setState({items: updatedItems});
  }

  _findItem(code) {
      return this.state.items.find(({code: itemCode}) => itemCode === code);
  }

  onBarCodeScanned(code){
    const foundItem = this._findItem(code);
    if(foundItem)
      this._onUpdateItem({...foundItem, quantity: 12 + foundItem.quantity})
    else
      this._onAddItem({name: code, mrp: 31, sp: 21, quantity: 12, code});
  }

  onManuallyItemAdded(item){
    this._onAddItem({...item, code: uuid()});
  }

  render() {
    return (
      <div onMouseDown={(e) => e.preventDefault() }>
        <AddNewItem onAdd={this.onManuallyItemAdded} />
        <ItemsTable items={this.state.items} />
        <BarCodeInputField onScanComplete={this.onBarCodeScanned}/>
      </div>
    );
  }
}
