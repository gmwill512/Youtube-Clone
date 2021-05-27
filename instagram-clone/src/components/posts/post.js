import React from 'react';
import './post.css';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({ caption, username, imageUrl }) {
  return (
    <div className="postContainer">
      <div className="headerContainer">
        <div className="postHeader">
          <Avatar
            className="postAvatar"
            alt="George"
            src="/static/images/avatar/1/jpg"
          />
          <h3>{username}</h3>
        </div>
        <div className="headerMenu">
          <MoreHorizIcon />
        </div>
      </div>
      <img alt="" src={imageUrl} className="postImage" />
      <div className="commentContainer">
        <div className="menu">Menu</div>
        <div className="username">
          <strong>{username}</strong> {caption}
        </div>
        <div className="comments">Comments</div>
        <div className="addPosts">Add A Comment</div>
      </div>
    </div>
  );
}

export default Post;
