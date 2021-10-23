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

  addBox(newBox) {
    this.setState((st) => {
      return {
        boxes: [...st.boxes, newBox],
      };
    });
  }

  removeBox(boxId) {
    this.setState((st) => {
      return { boxes: st.boxes.filter(({ id }) => id !== boxId) };
    });
  }

  render() {
    const boxes = this.state.boxes.map(({ width, height, bgColor, id }) => (
      <Box
        key={id}
        id={id}
        width={width}
        height={height}
        bgColor={bgColor}
        handleRemoveBox={() => this.removeBox(id)}
      />
    ));
    return (
      <div>
        <NewBoxForm handleAddBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
