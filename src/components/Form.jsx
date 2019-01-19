import React, { Component } from 'react';


class Form extends Component {
  render () {
    return (
      <div className="form__section container">
        <form onSubmit={this.props.gettingWether} className="form">
          <input type="text" name="city" placeholder="Город" autoComplete="off"/>
          <button type="submit">Посмотреть погоду</button>
        </form>
      </div>
    );
  }
}

export default Form;
