import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/';
import { Home, About, Projects, Contact, Resume } from './views/';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
