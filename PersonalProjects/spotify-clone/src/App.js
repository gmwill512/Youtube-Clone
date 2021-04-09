import './App.css';
import Login from './Login.js';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './Spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
    console.log('I have a token', user);
  }, [dispatch, user]);

  console.log(user);
  return <div className="app">{user ? <Player /> : <Login />}</div>;
}

export default App;
