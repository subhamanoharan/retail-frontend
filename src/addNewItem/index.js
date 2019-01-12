import React, { Component} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ' ', mrp: 0, sp: 0, quantity: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  handleChange(name) {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  onAdd(event) {
    this.props.onAdd({...this.state});
    event.preventDefault();
  }

  render() {
    return(
      <form noValidate autoComplete="off" onSubmit={this.onAdd}>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <TextField
          id="mrp"
          label="MRP"
          value={this.state.mrp}
          onChange={this.handleChange('mrp')}
        />
        <TextField
          id="sp"
          label="SP"
          value={this.state.sp}
          onChange={this.handleChange('sp')}
        />
        <TextField
          id="quantity"
          label="Quantity"
          value={this.state.quantity}
          onChange={this.handleChange('quantity')}
        />
        <Button
           type="submit"
           variant="contained"
           color="primary"
        >
          Add
        </Button>
      </form>
    );
  }
}
