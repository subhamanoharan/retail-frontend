import React, { Component} from 'react';

import './styles.css';

export default class BarCodeInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {code : ''}
    this.onScanComplete = this.onScanComplete.bind(this);
    this.onScanInput = this.onScanInput.bind(this);
  }

  onScanComplete(event){
    this.props.onScanComplete(this.state.code);
    event.preventDefault();
    this.setState({code: ''});
  }

  onScanInput(event) {
    this.setState({code: event.target.value});
  }

  isWaitingForScan(){
    return document.activeElement.id === "barCodeInput";
  }

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.onScanComplete}>
        {this.isWaitingForScan() && <p> Waiting for scan </p>}
        <input type="text" id="barCodeInput" className="barCodeInput" onChange={this.onScanInput} autoFocus value={this.state.code}/>
        <button type="submit" className="barCodeSubmit"/>
      </form>
    );
  }
}
