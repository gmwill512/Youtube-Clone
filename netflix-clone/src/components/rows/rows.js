import React from 'react';
import './rows.css';
import { useState, useEffect } from 'react';
import axios from '../../axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerURL) {
      setTrailerURL('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1 classname="title">{title}</h1>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`rowPoster ${isLargeRow && 'rowPosterLarge'}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
