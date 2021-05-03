import React from 'react';

function PreviewMain({ experienceArr, description }) {
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
    </div>
  );
}

export default PreviewMain;
