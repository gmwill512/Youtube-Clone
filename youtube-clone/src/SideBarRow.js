import React from 'react';
import './SideBarRow.css';
import './Sidebar.js';

function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
