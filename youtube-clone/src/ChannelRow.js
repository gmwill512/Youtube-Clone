import React from 'react';
import { Avatar } from '@material-ui/core';
import './ChannelRow.css';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" src={image} alt={channel} />
      <div className="channelRow_text">
        <h4>
          {channel}
          {verified && <CheckCircleTwoToneIcon />}
        </h4>
        <p>
          {subs}Subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
