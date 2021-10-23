import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

/**State will hold Object[] */
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
  }
  render() {
    return (
      <div>
        <NewBoxForm />
        {this.state.boxes.map(({ width, height, bgColor }) => (
          <Box width={width} height={height} bgColor={bgColor} />
        ))}
      </div>
    );
  }
}

export default BoxList;
