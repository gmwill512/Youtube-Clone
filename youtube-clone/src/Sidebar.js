import React from 'react';
import './Sidebar.css';
import SideBarRow from './SideBarRow.js';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone';
import LibraryAddCheckTwoToneIcon from '@material-ui/icons/LibraryAddCheckTwoTone';
import HistoryTwoToneIcon from '@material-ui/icons/HistoryTwoTone';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import TheatersTwoToneIcon from '@material-ui/icons/TheatersTwoTone';
import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={HomeTwoToneIcon} title="Home" />
      <SideBarRow Icon={TrendingUpTwoToneIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsTwoToneIcon} title="Subscriptions" />
      <hr></hr>
      <SideBarRow Icon={LibraryAddCheckTwoToneIcon} title="Library" />
      <SideBarRow Icon={HistoryTwoToneIcon} title="History" />
      <SideBarRow Icon={PlayArrowTwoToneIcon} title="Your Videos" />
      <SideBarRow Icon={TheatersTwoToneIcon} title="Your Movies" />
      <SideBarRow Icon={WatchLaterTwoToneIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltTwoToneIcon} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreTwoToneIcon} title="Show More" />
      <hr></hr>
    </div>
  );
}

export default Sidebar;
