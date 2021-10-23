import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    const boxStyles = {
      width: Number(this.props.width),
      height: Number(this.props.height),
      backgroundColor: this.props.bgColor,
    };

    return (
      <div className="Box-container">
        <div key={this.props.id} style={boxStyles}></div>
        <button onClick={this.props.handleRemoveBox}>X</button>
      </div>
    );
  }
}

export default Box;
