// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Define the Routes */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Movie list page */}
          <Route path="/movies" element={<MovieList />} />

          {/* Movie detail page */}
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
