import React from 'react';

function PreviewHeader({ mainInfoState }) {
  const { firstName, lastName, title } = mainInfoState;

  return (
    <header className="preview-header">
      <h1>
        {firstName && firstName} {``}
        {lastName && lastName}
      </h1>
      <h4>{title && title}</h4>
    </header>
  );
}

export default PreviewHeader;
