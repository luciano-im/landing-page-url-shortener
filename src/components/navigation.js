import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul>
        <div className="navigation">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </div>
        <div className="login">
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="" className="btn">
              Sign Up
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
