import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

const apiKey = '17e810c0'

function App() {

  const [movieData, setMovieData] = useState({})

  const getMovie = async (searchTerm) => {
    try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
        );
          
        const movie = response.data
    
        setMovieData(movie);
    }
    catch (error) {
      console.error(error);
    }
    
  };

  useEffect(() => {
    getMovie('django unchained')
  }, [])

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movieData}/>
    </div>
  );
}

export default App;
