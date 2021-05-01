import React from 'react';

function ExperienceInput({ handleInputChange }) {
  return (
    <form className="form-input">
      <input
        onChange={handleInputChange}
        name="position"
        placeholder="Position"
        type="text"
      />
      <input
        onChange={handleInputChange}
        name="company"
        placeholder="Company"
        type="text"
      />
      <input
        onChange={handleInputChange}
        name="location"
        placeholder="Location"
        type="text"
      />
      <input
        onChange={handleInputChange}
        name="from"
        placeholder="From"
        type="date"
      />
      <input
        onChange={handleInputChange}
        name="to"
        placeholder="To"
        type="date"
      />
    </form>
  );
}

export default ExperienceInput;
