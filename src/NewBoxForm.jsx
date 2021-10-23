import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '', height: '', bgColor: '' };
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    return (
      <form>
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          id="width"
          name="width"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          id="height"
          name="height"
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="bgColor">Background-color: </label>
        <input
          type="text"
          id="bgColor"
          name="bgColor"
          onChange={this.handleChange}
        />
        <br />
      </form>
    );
  }
}

export default NewBoxForm;
