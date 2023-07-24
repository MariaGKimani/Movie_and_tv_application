import logo from './logo.svg';
import MovieList from './components/MovieList';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';

function App() {
  return (
   <div>
    <Router>

    <Routes>
      <Route path='/' element={<MovieList/>} />
      <Route path='/moviedetails/:id' element={<MovieDetails/>} />


    </Routes>
    </Router>
    

   </div>
  );
}
export default App;
