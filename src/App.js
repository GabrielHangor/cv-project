import React, { Component } from 'react';
import MainInfo from './Components/InputForm/MainInfo';
import PreviewHeader from './Components/Preview/PreviewHeader';
import PreviewPersonal from './Components/Preview/PreviewPersonal';
import PreviewMain from './Components/Preview/PreviewMain';
import Experience from './Components/InputForm/Experience';
import Education from './Components/InputForm/Education';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainInfo: {},
      experienceObj: {},
      experienceArr: [],
      educationObj: {},
      educationArr: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleExperienceInputChange = this.handleExperienceInputChange.bind(
      this
    );
    this.submitExperience = this.submitExperience.bind(this);
    this.deletePreviousExperience = this.deletePreviousExperience.bind(this);
    this.handleEducationInputChange = this.handleEducationInputChange.bind(
      this
    );
    this.submitEducation = this.submitEducation.bind(this);
    this.deletePreviousEducation = this.deletePreviousEducation.bind(this);
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

  handleEducationInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      educationObj: { ...this.state.educationObj, [name]: value },
    });
  }

  submitExperience() {
    this.setState({
      experienceArr: [...this.state.experienceArr, this.state.experienceObj],
      experienceObj: {},
    });
  }

  submitEducation() {
    this.setState({
      educationArr: [...this.state.educationArr, this.state.educationObj],
      educationObj: {},
    });
  }

  deletePreviousExperience() {
    const array = [...this.state.experienceArr];
    array.pop();
    this.setState({
      experienceArr: array,
    });
  }

  deletePreviousEducation() {
    const array = [...this.state.educationArr];
    array.pop();
    this.setState({
      educationArr: array,
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
            <Education
              handleInputChange={this.handleEducationInputChange}
              submitEducation={this.submitEducation}
              deletePreviousEducation={this.deletePreviousEducation}
            />
          </div>
          <div className="preview">
            <PreviewHeader mainInfoState={this.state.mainInfo} />
            <div className="preview-inner">
              <PreviewMain
                experienceArr={this.state.experienceArr}
                educationArr={this.state.educationArr}
                description={this.state.mainInfo.description}
              />
              <PreviewPersonal mainInfoState={this.state.mainInfo} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
