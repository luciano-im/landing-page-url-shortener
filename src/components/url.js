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
        <a href="" className="original">
          {url}
        </a>
        <div className="shortened-content">
          <a href="" className="shortened">
            {shortened}
          </a>
          {isCopied ? (
            <a
              href=""
              className="btn-square link-copied"
              onClick={handleCopyClick}
            >
              Copied!
            </a>
          ) : (
            <a href="" className="btn-square" onClick={handleCopyClick}>
              Copy
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Url;
