import React from 'react';

function MenuButton() {
  return (
    <>
      <label className="hamburguer" htmlFor="open-menu">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </label>
      <input type="checkbox" name="open-menu" id="open-menu" />
    </>
  );
}

export default MenuButton;
