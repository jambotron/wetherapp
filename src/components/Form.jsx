import React, { Component } from 'react';

class Form extends Component {
  render () {
    return (
      <form onSubmit={this.props.wetherMethod}>
        <input type="text" name="city" placeholder="City"/>
        <button type="submit">Get wether</button>
      </form>
    );
  }
}

export default Form;
