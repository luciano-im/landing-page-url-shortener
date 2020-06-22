import React from 'react';

function Url() {
  return (
    <>
      <div className="link">
        <a href="" className="original">
          https://www.frontendmentor.io
        </a>
        <div className="shortened-content">
          <a href="" className="shortened">
            https://rel.ink/islsjf
          </a>
          <a href="" className="btn-square">
            Copy
          </a>
        </div>
      </div>
      <div className="link">
        <a href="" className="original">
          https://www.frontendmentor.io
        </a>
        <div className="shortened-content">
          <a href="" className="shortened">
            https://rel.ink/islsjf
          </a>
          <a href="" className="btn-square link-copied">
            Copied!
          </a>
        </div>
      </div>
    </>
  );
}

export default Url;
