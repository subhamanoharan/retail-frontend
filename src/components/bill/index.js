import React, { Component} from 'react';

import AddNewItem from '../addNewItem';
import ItemsTable from '../itemsTable';
import BarCodeManager from '../barCodeManager';
import ImmutableCart from '../../models/immutableCart';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: new ImmutableCart([
      {code: 'dummy1', name: 'dummy1', sp: 20},
      {code: 'dummy2', name: 'dummy2', sp: 20}
    ] )};
    this.onAddItem = this.onAddItem.bind(this);
  }

  onAddItem({code, sp, name}, quantity){
    this.setState({cart: this.state.cart.addItem({code, sp, name}, quantity)});
  }

  render() {
    return (
      <div onMouseDown={(e) => e.preventDefault() }>
        <AddNewItem onAdd={this.onAddItem} />
        <ItemsTable items={this.state.cart.getItems()} />
        <BarCodeManager onItemScanned={this.onAddItem} masterList={this.props.masterList}/>
      </div>
    );
  }
}
