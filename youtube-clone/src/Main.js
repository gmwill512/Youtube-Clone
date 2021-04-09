import React from 'react';
import './Main.css';
import VideoCard from './VideoCard';
import './VideoCard.css';

function Main() {
  return (
    <div className="main">
      <h2>Recommended</h2>
      <div className="main_videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default Main;
