import React from 'react';
import Url from './url';

function Shortener() {
  return (
    <section className="shortener">
      <div className="background"></div>
      <form action="" className="layout-m error">
        <div className="link-input">
          <input type="text" placeholder="Shorten a link here..." />
          <span className="error-msg">Please add a link</span>
        </div>
        <input type="submit" value="Shorten It!" className="btn-square" />
      </form>
      <div className="links layout-m">
        <Url />
      </div>
    </section>
  );
}

export default Shortener;
