import React, { Component} from "react";
import TextField from '@material-ui/core/TextField';

export default class AddNewItemForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return event => {
      this.props.onChange({
        ...this.props.item,
        [name]: event.target.value,
      });
    };
  }

  render() {
    const {name, mrp, sp, quantity} = this.props.item;
    return(
      <div>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={this.handleChange('name')}
            autoFocus
          />
          <TextField
            id="mrp"
            label="MRP"
            value={mrp}
            onChange={this.handleChange('mrp')}
          />
          <TextField
            id="sp"
            label="SP"
            value={sp}
            onChange={this.handleChange('sp')}
          />
          <TextField
            id="quantity"
            label="Quantity"
            value={quantity}
            onChange={this.handleChange('quantity')}
          />
      </div>
    );
  }
}
