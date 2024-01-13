import './App.css';
import Intro from './Components/Intro';
import React from 'react';
import About from './Components/About';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Academic from './Components/Academic';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/Intro' element={<Intro/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Academic' element={<Academic/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
