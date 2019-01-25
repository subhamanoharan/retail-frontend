import React, { Component} from "react";

import AddNewItem from '../addNewItem';
import ItemsTable from '../itemsTable';
import BarCodeManager from '../barCodeManager';
import ImmutableItems from '../models/immutableItems';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { items: new ImmutableItems([
      {code: 'dummy1', name: 'dummy1', sp: 20, quantity: 1},
      {code: 'dummy2', name: 'dummy2', sp: 20, quantity: 1}
    ] )};
    this.onAddItem = this.onAddItem.bind(this);
  }

  onAddItem(item){
    const existingItem = this.state.items.findItemByCode(item.code);
    if(existingItem)
      this.setState({items: this.state.items.updateItemByCode(
        {...existingItem, quantity: 1 + existingItem.quantity})});
    else
      this.setState({items: this.state.items.addItem(item)});
  }

  render() {
    return (
      <div onMouseDown={(e) => e.preventDefault() }>
        <AddNewItem onAdd={this.onAddItem} />
        <ItemsTable items={this.state.items.getItems()} />
        <BarCodeManager onItemScanned={this.onAddItem}/>
      </div>
    );
  }
}
