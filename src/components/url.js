import React, { useState } from 'react';

function Url(props) {
  const { url, shortened } = props;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (e) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(shortened)
      .then(() => setIsCopied(true))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="link">
        <span className="original">{url}</span>
        <div className="shortened-content">
          <span className="shortened">{shortened}</span>
          {isCopied ? (
            <button
              className="btn-square link-copied"
              onClick={handleCopyClick}
            >
              Copied!
            </button>
          ) : (
            <button className="btn-square" onClick={handleCopyClick}>
              Copy
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Url;
