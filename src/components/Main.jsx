import React from 'react'
import './main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'
import Geoapp from './Geoapp'
import AnyDashboard from './AnyDashboard'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <main id='main' className='main'>
      <Routes>
        <Route path="/" element={<AnyDashboard />} />
        <Route path="/abc" element={<Dashboard />} />
        <Route path="/xyz" element={<Geoapp />} />
      </Routes>
    </main>
  );
}

export default Main