import React from 'react';

function PreviewHeader({ mainInfoState }) {
  const { firstName, lastName, title } = mainInfoState;

  return (
    <header className="preview-header">
      <h1>
        {firstName} {``}
        {lastName}
      </h1>
      <h4>{title}</h4>
    </header>
  );
}

export default PreviewHeader;
