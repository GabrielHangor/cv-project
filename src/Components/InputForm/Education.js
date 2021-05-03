import React, { Component } from 'react';
import EducationInput from './EducationInput';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      toggleInput: false,
    };

    this.toggleInput = this.toggleInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.closeInput = this.closeInput.bind(this);
  }

  toggleInput() {
    this.setState({ toggleInput: true });
  }

  submitInput(e) {
    e.preventDefault();
    this.setState({ toggleInput: false });
    this.props.submitEducation();
  }

  closeInput() {
    this.setState({ toggleInput: false });
  }

  render() {
    return (
      <div className="form-group">
        <h2>Education</h2>
        {this.state.toggleInput && (
          <EducationInput
            submitInput={this.submitInput}
            handleInputChange={this.props.handleInputChange}
            closeInput={this.closeInput}
          />
        )}
        {this.state.toggleInput === false ? (
          <div className="form-input">
            <button onClick={this.toggleInput} className="add-btn">
              ADD
            </button>
            <button
              onClick={this.props.deletePreviousEducation}
              className="cancel-btn"
            >
              Delete The Last
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Education;
