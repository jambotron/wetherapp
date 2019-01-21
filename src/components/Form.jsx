import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  render () {
    return (
      <div className="form-section">
        <form onSubmit={this.props.getWetherData} className="form">
          <input type="text" name="city" placeholder="Город" autoComplete="off"/>
          <button type="submit">Посмотреть погоду</button>
        </form>
      </div>
    );
  }
}

export default Form;
