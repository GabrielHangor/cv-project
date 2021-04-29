import React from 'react';

function ExperienceInput() {
  return <form className="form-input">
    <input placeholder='Position' type="text"/>
    <input placeholder='Company' type="text"/>
    <input placeholder='Location' type="text"/>
    <input placeholder='From' type="date"/>
    <input placeholder='To' type="date"/>
  </form>;
}

export default ExperienceInput;
