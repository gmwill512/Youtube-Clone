import './App.css';
import Header from './components/header/header.js';
import Post from './components/posts/post.js';
import StoryBar from './components/story-bar/story-bar.js';
import { useState, useEffect } from 'react';
import { db } from './firebase.js';
import React from 'react';
import ImageUploads from './components/image-uploads/image-uploads.js';

export const UserContext = React.createContext();
const defaultUser = null;

export function UserProvider({ children, user }) {
  const [currentUser, setCurrentUser] = useState(user || defaultUser);
  const saveUser = (value) => {
    setCurrentUser(value);
  };
  return (
    <UserContext.Provider value={{ user: currentUser, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  //Takes a snapshot of the collection documents on Firebase
  useEffect(() => {
    db.collection('Posts').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        })),
      );
    });
  }, []);

  return (
    <UserProvider user={null}>
      <div className="app">
        <Header className="Header" />
        <ImageUploads />
        <StoryBar />
        <div className="Post">
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              caption={post.caption}
              username={post.username}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
