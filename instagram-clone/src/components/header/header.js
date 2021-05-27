import React from 'react';
import './header.css';
import SignUpSignIn from '../signUp-signIn/signUp-signIn.js';

function Header() {
  return (
    <div className="container">
      <div className="mainHeader">
        <img
          className="headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          height="40px;"
          alt=""
        />
        <div>searchbar</div>
        <div className="sideNav">
          <h4>messages</h4>
          <SignUpSignIn />
        </div>
      </div>
    </div>
  );
}

export default Header;
