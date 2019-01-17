import React, { Component } from 'react';


class Form extends Component {
  render () {
    return (
      <div onClick={this.props.getLocation}>
        <form onSubmit={this.props.gettingWether}>
          <input type="text" name="city" placeholder="City"/>
          <button type="submit">Get wether</button>
        </form>
      </div>
    );
  }
}

export default Form;
