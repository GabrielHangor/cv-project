import React from 'react';

function PreviewMain({ experienceArr, educationArr, description }) {
  return (
    <div className="preview-main">
      <div className="preview-description">
        <h3 style={{ borderBottom: '1.5px solid dodgerblue' }}>Description</h3>
        <p className="description">{description}</p>
      </div>
      <h3 style={{ borderBottom: '1.5px solid dodgerblue' }}>Experience</h3>
      <div className="preview-experience">
        {experienceArr.map((experienceObj, index) => {
          const { company, from, to, location, position } = experienceObj;
          return (
            <div key={index} className="experience-obj">
              <div className="experience-period">
                <p>{from} -</p>
                <p>{to}</p>
              </div>
              <div className="experience-details">
                <h3>{position}</h3>
                <p>{`${location}, ${company}`}</p>
              </div>
            </div>
          );
        })}
      </div>
      <h3 style={{ borderBottom: '1.5px solid dodgerblue' }}>Education</h3>
      <div className="preview-education">
        {educationArr.map((educationObj, index) => {
          const { univercity, city, degree, subject, from, to } = educationObj;
          return (
            <div key={index} className="education-obj">
              <div className="education-period">
                <p>{from} -</p>
                <p>{to}</p>
              </div>
              <div className="education-details">
                <h3>{`${univercity}, ${city}`}</h3>
                <p>{`${subject}, ${degree}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PreviewMain;
