import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import HeaderButton from './components/HeaderButton';
import FindByIngredients from './components/FindByIngredients.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row center-align" style={{ marginTop: "20vh" }}>
          <HeaderButton />
          <FindByIngredients />
        </div>
      </div>
    );
  }
}

export default App;
