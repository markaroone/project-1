import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import GeneralPageTemplate from './components/ui/GeneralPageTemplate';
import { Dashboard, ActivitiesList, Activity, Generator } from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />;
      <Route path={'dashboard'} element={<Dashboard />} />;
      <Route path={'activities/:type'} element={<ActivitiesList />} />
      {/* <Route path={'/:id'} element={<Dashboard />} /> */}
      {/* <Route path='all-activities' element={<ActivitiesList />} />
        <Route path='cycling' element={<ActivitiesList />} />
        <Route path='running' element={<ActivitiesList />} /> */}
      {/* </Route> */}
      <Route path={'activities/:type/:id'} element={<Activity />} />
      <Route path='daily-summary' element={<ActivitiesList />} />
      <Route path='goals' element={<Generator />} />;
    </Routes>
  );
}

export default App;
