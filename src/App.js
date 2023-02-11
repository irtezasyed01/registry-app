import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Registry from './routes/Registry';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/registry' element={<Registry/>} />      
          <Route path='/about' element={<About/>} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
