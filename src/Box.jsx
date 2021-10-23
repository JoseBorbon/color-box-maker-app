import React, { Component } from 'react';

class Box extends Component {
  render() {
    const boxStyles = {
      width: Number(this.props.width),
      height: Number(this.props.height),
      backgroundColor: this.props.bgColor,
    };

    return <div style={boxStyles}></div>;
  }
}

export default Box;
