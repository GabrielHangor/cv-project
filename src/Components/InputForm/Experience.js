import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

class Experience extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="form-group">
        <h2>Experience</h2>
        <ExperienceInput />
        <button className="add-btn">ADD</button>
        <button className="submit-btn">Submit</button>
      </div>
    );
  }
}

export default Experience;
