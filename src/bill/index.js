import React, { Component} from "react";
import uuid from 'uuid/v4';

import AddNewItem from '../addNewItem';
import ItemsTable from '../itemsTable';
import BarCodeInputField from '../barCodeInputField';
import ImmutableItems from '../models/immutableItems';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { items: new ImmutableItems([
      {code: 'dummy1', name: 'dummy1', sp: 20, quantity: 1},
      {code: 'dummy2', name: 'dummy2', sp: 20, quantity: 1}
    ] )};
    this.onManuallyItemAdded = this.onManuallyItemAdded.bind(this);
    this.onBarCodeScanned = this.onBarCodeScanned.bind(this);
  }

  _onAddItem(item){
    this.setState({items: this.state.items.addItem(item)});
  }

  _onUpdateItem(itemToEdit){
    this.setState({items: this.state.items.updateItemByCode(itemToEdit)});
  }

  onBarCodeScanned(code){
    const foundItem = this.state.items.findItemByCode(code);
    if(foundItem)
      this._onUpdateItem({...foundItem, quantity: 1 + foundItem.quantity})
    else
      this._onAddItem({name: code, sp: 21, quantity: 12, code});
  }

  onManuallyItemAdded(item){
    this._onAddItem({...item, code: uuid()});
  }

  render() {
    return (
      <div onMouseDown={(e) => e.preventDefault() }>
        <AddNewItem onAdd={this.onManuallyItemAdded} />
        <ItemsTable items={this.state.items.getItems()} />
        <BarCodeInputField onScanComplete={this.onBarCodeScanned}/>
      </div>
    );
  }
}
