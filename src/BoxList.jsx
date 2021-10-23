import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

/**State will hold Object[] */
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
  }

  addBox(box) {
    this.setState((st) => {
      return {
        boxes: [...st.boxes, box],
      };
    });
  }
  render() {
    return (
      <div>
        <NewBoxForm handleAddBox={this.addBox} />
        {this.state.boxes.map(({ width, height, bgColor }) => (
          <Box width={width} height={height} bgColor={bgColor} />
        ))}
      </div>
    );
  }
}

export default BoxList;
