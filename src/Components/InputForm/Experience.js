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

  submitInput() {
    this.setState({ toggleInput: false });
    this.props.submitExperience();
  }

  render() {
    return (
      <div className="form-group">
        <h2>Experience</h2>
        {this.state.toggleInput && (
          <ExperienceInput handleInputChange={this.props.handleInputChange} />
        )}
        {this.state.toggleInput === false ? (
          <button onClick={this.toggleInput} className="add-btn">
            ADD
          </button>
        ) : null}
        {this.state.toggleInput && (
          <button onClick={this.submitInput} className="add-btn">
            Submit
          </button>
        )}
      </div>
    );
  }
}

export default Experience;
