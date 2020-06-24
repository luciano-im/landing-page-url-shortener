import React from 'react';
import Menu from './header-menu';
import MenuButton from './hamburguer';
import Navigation from './navigation';
import logo from '../img/logo.svg';

function Header() {
  return (
    <header className="layout-m">
      <div className="logo">
        <img src={logo} alt="Shortly" />
      </div>
      <Menu>
        <MenuButton />
        <Navigation />
      </Menu>
    </header>
  );
}

export default Header;
