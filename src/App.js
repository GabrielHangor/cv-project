import React, { Component } from 'react';
import MainInfo from './Components/InputForm/MainInfo';
import PreviewHeader from './Components/Preview/PreviewHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainInfo: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      mainInfo: { ...this.state.mainInfo, [name]: value },
    });
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>CV APP</h1>
        </header>
        <main className="inner-container">
          <div className="input-form">
            <MainInfo
              handleInputChange={this.handleInputChange}
              mainInfoState={this.state.mainInfo}
            />
          </div>
          <div className="preview">
            <PreviewHeader mainInfoState={this.state.mainInfo} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
