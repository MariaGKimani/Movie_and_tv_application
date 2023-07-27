
import MovieList from './components/MovieList';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import MovieDetails from './MovieDetails';
import MovieSlider from './slider';

import SearchBar from './components/MovieList/searchbar';

function App() {
  return (
   <div>
    <Router>
    <MovieSlider/>
    <Routes>
      <Route path='/' element={<MovieList/>} />
      <Route path='/moviedetails/:id' element={<MovieDetails/>} />
      <Route path='/movie/deta' element={<MovieSlider/>}/>
      <Route path='' element={<SearchBar/>}/>


    </Routes>
    </Router>
    

   </div>
  );
}
export default App;
