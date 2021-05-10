import React, { useState } from 'react';
import ExperienceInput from './ExperienceInput';

function Experience({
  handleInputChange,
  deletePreviousExperience,
  submitExperience,
}) {
  const [toggleInput, setToggleInput] = useState(false);

  const submitInput = (e) => {
    e.preventDefault();
    submitExperience();
    setToggleInput(false);
  };

  return (
    <div className="form-group">
      <h2>Experience</h2>
      {toggleInput && (
        <ExperienceInput
          submitInput={submitInput}
          handleInputChange={handleInputChange}
          closeInput={() => setToggleInput(false)}
        />
      )}
      {toggleInput === false ? (
        <div className="form-input">
          <button onClick={() => setToggleInput(true)} className="add-btn">
            ADD
          </button>
          <button
            onClick={deletePreviousExperience}
            className="cancel-btn"
          >
            Delete The Last
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Experience;
