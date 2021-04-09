import React, { useState } from 'react';
import './Header.css';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import VideoCallTwoToneIcon from '@material-ui/icons/VideoCallTwoTone';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header_left">
        <MenuTwoToneIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header_input">
        <div className="searchbar">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            className="searchInput"
            type="text"
            placeholder="Search"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchTwoToneIcon className="header_inputButton" />
          </Link>
        </div>
      </div>

      <div className="header_icons">
        <VideoCallTwoToneIcon className="header_right" />
        <AppsTwoToneIcon className="header_right" />
        <NotificationsActiveTwoToneIcon className="header_right" />
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFZx9jUrxlsGQ/profile-displayphoto-shrink_100_100/0/1593959098847?e=1619654400&v=beta&t=aXssA9oZAEZJJ2FOsTa8wH5tpwELECfQE2bZucqawpM" />
      </div>
    </div>
  );
}

export default Header;
