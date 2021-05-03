import React from 'react';

function MainInfo({ handleInputChange }) {
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
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleInputChange}
        />
        <label name="photo" className="photo-input-label" htmlFor="photo">
          Photo
          <input
            id="photo"
            style={{ display: 'none' }}
            name="photo"
            type="file"
            placeholder="Photo"
            onChange={handleInputChange}
          />
        </label>

        <input
          name="location"
          type="text"
          placeholder="Location"
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
        <textarea
        className='text-area'
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default MainInfo;
