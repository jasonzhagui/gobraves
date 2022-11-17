import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="root">
      <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      </div>
    </div>

  );
}

export default App;
