import React from 'react';

function EducationInput({ handleInputChange, submitInput, closeInput }) {
  return (
    <form onSubmit={submitInput} className="form-input">
      <input
        required
        onChange={handleInputChange}
        name="univercity"
        placeholder="Univercity Name"
        type="text"
      />
      <input
        required
        onChange={handleInputChange}
        name="city"
        placeholder="City"
        type="text"
      />
      <input
        required
        onChange={handleInputChange}
        name="degree"
        placeholder="Degree"
        type="text"
      />
      <input
        required
        onChange={handleInputChange}
        name="subject"
        placeholder="Subject"
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

export default EducationInput;
