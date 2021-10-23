import React, { Component } from 'react';

class Box extends Component {
  render() {
    const boxStyles = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.bgColor,
    };
    return <div style={boxStyles}></div>;
  }
}

export default Box;
