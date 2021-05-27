import { Button, Input } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import './image-uploads.css';
import { db, storage } from '../../firebase.js';
import firebase from 'firebase';
import { UserContext } from '../../App.js';

function ImageUploads() {
  const [caption, setCaption] = useState('');
  const [progress, setProgress] = useState('');
  const [image, setImage] = useState(null);
  const userContext = useContext(UserContext);
  // Selects the image from the users computer
  console.log(userContext.user);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImg = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log(userContext.user);
    //takes snapshot and uploads image progress bar
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(progress);
      },
      (error) => {
        //Error Function
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function
        storage
          .ref('image')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post the image
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp,
              caption: caption,
              imageUrl: url,
              imagename: image.name,
              username: userContext.user.displayName,
            });
          });
      },
    );
  };

  return (
    <div className="imageUpload">
      {userContext.user ? (
        <form className="uploadForm">
          <Input type="file" onChange={handleChange} className="file" />
          <Input
            className="caption"
            type="text"
            placeholder="Enter a caption..."
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
          />
          <center>
            <Button onSubmit={uploadImg} className="imageSubmit">
              Load Post
            </Button>
          </center>
        </form>
      ) : (
        <h3>Sign In To Post</h3>
      )}
    </div>
  );
}

export default ImageUploads;
