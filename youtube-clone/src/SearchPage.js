import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image=""
        channel=""
        verified
        subs=""
        noOfVideos=""
        discription=""
      />
      <hr></hr>
      <VideoRow
        image=""
        channel=""
        verified
        subs=""
        noOfVideos=""
        discription=""
      />
    </div>
  );
}

export default SearchPage;
