import React from 'react';

function MainInfo({ handleInputChange, mainInfoState }) {
  return (
    <div className="form-group">
      <h2>Personal Information</h2>
      <form className="form-input">
        <input
          name="firstName"
          value={mainInfoState.firstName}
          type="text"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          name="lastName"
          value={mainInfoState.lastName}
          type="text"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <input
          name="photo"
          value={mainInfoState.photo}
          type="text"
          placeholder="Photo"
          onChange={handleInputChange}
        />
        <input
          name="address"
          value={mainInfoState.address}
          type="text"
          placeholder="Address"
          onChange={handleInputChange}
        />
        <input
          name="phoneNumber"
          value={mainInfoState.phoneNumber}
          type="text"
          placeholder="Phone number"
          onChange={handleInputChange}
        />
        <input
          name="email"
          value={mainInfoState.email}
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          name="description"
          value={mainInfoState.description}
          type="textarea"
          placeholder="Description"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default MainInfo;
