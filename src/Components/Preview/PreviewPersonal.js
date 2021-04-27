import React from 'react';

function PreviewPersonal({ mainInfoState }) {
  const { photo, location, phoneNumber, email } = mainInfoState;

  return (
    <div className="preview-personal">
      <img className="preview-photo" src={photo} alt="" />
      <h4>Personal Details</h4>
      <div className="personal-details">
        <section>
          <h4>Location</h4>
          {location}
        </section>
        <section>
          <h4>Phone Number</h4>
          {phoneNumber}
        </section>
        <section>
          <h4>Email</h4>
          {email}
        </section>
      </div>
    </div>
  );
}

export default PreviewPersonal;
