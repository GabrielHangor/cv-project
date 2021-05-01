import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      toggleInput: false,
    };

    this.toggleInput = this.toggleInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  toggleInput() {
    this.setState({ toggleInput: true });
  }

  submitInput(e) {
    e.preventDefault();
    this.setState({ toggleInput: false });
    this.props.submitExperience();
  }

  render() {
    return (
      <div className="form-group">
        <h2>Experience</h2>
        {this.state.toggleInput && (
          <ExperienceInput
            submitInput={this.submitInput}
            handleInputChange={this.props.handleInputChange}
          />
        )}
        {this.state.toggleInput === false ? (
          <button onClick={this.toggleInput} className="add-btn">
            ADD
          </button>
        ) : null}
      </div>
    );
  }
}

export default Experience;
