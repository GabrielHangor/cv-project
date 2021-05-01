import React, { Component } from 'react';
import MainInfo from './Components/InputForm/MainInfo';
import PreviewHeader from './Components/Preview/PreviewHeader';
import PreviewPersonal from './Components/Preview/PreviewPersonal';
import PreviewMain from './Components/Preview/PreviewMain';
import Experience from './Components/InputForm/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainInfo: {},
      experienceObj: {},
      experienceArr: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleExperienceInputChange = this.handleExperienceInputChange.bind(
      this
    );
    this.submitExperience = this.submitExperience.bind(this);
    this.deletePreviousExperience = this.deletePreviousExperience.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      mainInfo: {
        ...this.state.mainInfo,
        [name]:
          name === 'photo' ? URL.createObjectURL(e.target.files[0]) : value,
      },
    });
  }

  handleExperienceInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      experienceObj: { ...this.state.experienceObj, [name]: value },
    });
  }

  submitExperience() {
    this.setState({
      experienceArr: [...this.state.experienceArr, this.state.experienceObj],
      experienceObj: {},
    });
  }

  deletePreviousExperience() {
    const array = [...this.state.experienceArr];
    array.pop();
    this.setState({
      experienceArr: array,
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
            <MainInfo handleInputChange={this.handleInputChange} />
            <Experience
              handleInputChange={this.handleExperienceInputChange}
              submitExperience={this.submitExperience}
              deletePreviousExperience={this.deletePreviousExperience}
            />
          </div>
          <div className="preview">
            <PreviewHeader mainInfoState={this.state.mainInfo} />
            <div className="preview-inner">
              <PreviewMain />
              <PreviewPersonal mainInfoState={this.state.mainInfo} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
