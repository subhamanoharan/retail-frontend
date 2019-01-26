import React, { Component} from "react";

import BarCodeInputField from '../barCodeInputField';

export default class BarCodeManager extends Component {
  constructor(props) {
    super(props);
    this.onBarCodeScanned = this.onBarCodeScanned.bind(this);
  }

  onBarCodeScanned(code){
      this.props.onItemScanned({name: code, sp: 21, code});
  }

  render() {
    return (
      <BarCodeInputField onScanComplete={this.onBarCodeScanned}/>
    );
  }
}
