import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import GeneralPageTemplate from './components/ui/GeneralPageTemplate';
import { Dashboard, Generator } from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />;
      <Route path={'/dashboard'} element={<Dashboard />} />;
      <Route path={'/activities'} element={<Dashboard />}>
        <Route path='all-activities' element={<Dashboard />} />
        <Route path='cycling' element={<Dashboard />} />
        <Route path='running' element={<Dashboard />} />
      </Route>
      <Route path='goals' element={<Generator />} />;
    </Routes>
  );
}

export default App;
