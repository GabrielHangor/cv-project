import React from 'react';

function PreviewHeader({ mainInfoState }) {
  const { firstName, lastName } = mainInfoState;

  return (
    <header className="preview-header">
      <h1>
        {firstName && firstName} {``}
        {lastName && lastName}
      </h1>
    </header>
  );
}

export default PreviewHeader;
