import React from 'react';

function MainInfo({ handleInputChange, mainInfoState }) {
  return (
    <div className="form-group">
      <h2>Personal Information</h2>
      <form className="form-input">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <input
          name="photo"
          type="text"
          placeholder="Photo"
          onChange={handleInputChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          onChange={handleInputChange}
        />
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          name="description"
          type="textarea"
          placeholder="Description"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default MainInfo;
