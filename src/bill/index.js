import React, { Component} from "react";

import AddNewItem from '../addNewItem';
import ItemsTable from '../itemsTable';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.onAddNewItem = this.onAddNewItem.bind(this);
  }

  onAddNewItem(item){
    this.setState({items: [...this.state.items, item]});
  }

  render() {
    return (
      <div>
        <AddNewItem onAdd={this.onAddNewItem} />
        <ItemsTable items={this.state.items} />
      </div>
    );
  }
}
