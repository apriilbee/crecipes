import React, { Component } from 'react';

class HeaderButton extends Component {
  state = {
    button1Disabled: false,
    button2Disabled: true,
  };

  handleClickButton1 = () => {
    this.setState({
      button1Disabled: true,
      button2Disabled: false,
    });
  };

  handleClickButton2 = () => {
    this.setState({
      button1Disabled: false,
      button2Disabled: true,
    });
  };

  render() {
    const { button1Disabled, button2Disabled } = this.state;
    return (
      <div className="col s12 m6 offset-m3">
        <button
          className="btn"
          disabled={button1Disabled}
          onClick={this.handleClickButton1}
        >
          Button 1
        </button>
        <span style={{ margin: "0 10px" }}></span>
        <button
          className="btn"
          disabled={button2Disabled}
          onClick={this.handleClickButton2}
        >
          Button 2
        </button>
      </div>
    );
  }
}

export default HeaderButton;
