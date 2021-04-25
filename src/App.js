import React, { Component } from 'react';
import MainInfo from './Components/InputForm/MainInfo'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>CV APP</h1>
        </header>
        <main className="inner-container">
          <div className="input-form">
            <MainInfo />
          </div>
          <div className="preview"></div>
        </main>
      </div>
    );
  }
}

export default App;
