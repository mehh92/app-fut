import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Auth />} />
        <Route path="*" element={<h1>Erreur 404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
