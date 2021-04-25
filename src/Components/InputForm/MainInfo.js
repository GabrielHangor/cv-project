import React from 'react';

function MainInfo() {
  return (
    <div className="form-group">
      <h2>Personal Information</h2>
      <form className='form-input'>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Photo" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <input  type="textarea" placeholder="Description" />
      </form>
    </div>
  );
}

export default MainInfo;
