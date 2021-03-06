import React from 'react';

function ExperienceInput({ handleInputChange, submitInput, closeInput }) {
  return (
    <form onSubmit={submitInput} className="form-input">
      <input
        required
        onChange={handleInputChange}
        name="position"
        placeholder="Position"
        type="text"
      />
      <input
        required
        onChange={handleInputChange}
        name="company"
        placeholder="Company"
        type="text"
      />
      <input
        required
        onChange={handleInputChange}
        name="location"
        placeholder="Location"
        type="text"
      />
      <input
        required
        onChange={handleInputChange}
        name="from"
        placeholder="From"
        type="date"
      />
      <input
        required
        onChange={handleInputChange}
        name="to"
        placeholder="To"
        type="date"
      />
      <button type="submit" className="add-btn">
        Submit
      </button>
      <button onClick={closeInput} type="button" className="cancel-btn">
        Cancel
      </button>
    </form>
  );
}

export default ExperienceInput;
