import React from 'react';
import './banner.css';
import { useState, useEffect } from 'react';
import axios from '../../axios';
import requests from '../../request';

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data.results);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );

      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        objectFit: `contain`,
        backgroundImage: `url(
      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="bannerContents">
        <div className="bannerTitle">
          {movie?.name || movie?.title || movie?.original_name}
        </div>

        <div className="bannerButton">
          <button className="bannerButtons">Play</button>
          <button className="bannerButtons">My List</button>
        </div>
        <div className="movieDescription">
          <h3>{truncate(movie?.overview, 400)}</h3>
        </div>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}

export default Banner;
