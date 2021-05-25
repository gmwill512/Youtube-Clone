import './App.css';
import React from 'react';
import requests from './request.js';
import Row from './components/rows/rows.js';
import Banner from './components/banner/banner.js';
import NavBar from './components/navbar/navbar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        isLargeRow
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    </div>
  );
}

//https://netflix-clone-4bfac.web.app
export default App;
