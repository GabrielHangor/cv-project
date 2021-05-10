import React, { useState } from 'react';
import EducationInput from './EducationInput';

function Education({
  handleInputChange,
  deletePreviousEducation,
  submitEducation,
}) {
  const [toggleInput, setToggleInput] = useState(false);

  const submitInput = (e) => {
    e.preventDefault();
    submitEducation();
    setToggleInput(false);
  };

  return (
    <div className="form-group">
      <h2>Education</h2>
      {toggleInput && (
        <EducationInput
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
            onClick={deletePreviousEducation}
            className="cancel-btn"
          >
            Delete The Last
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Education;
