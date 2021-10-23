import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '', height: '', bgColor: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (Object.values(this.state).includes('')) return;
    const newBox = { ...this.state, id: uuidv4() };

    //invoke method which takes in an object and stores it into state upstairs
    this.props.handleAddBox(newBox);

    this.setState({ width: '', height: '', bgColor: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="bgColor">Background-color: </label>
        <input
          type="text"
          id="bgColor"
          name="bgColor"
          value={this.state.bgColor}
          onChange={this.handleChange}
        />
        <br />
        <button>Add Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
