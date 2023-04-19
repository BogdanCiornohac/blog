import React from 'react';
import Auth from './components/Auth/Auth'
import MainPage from './components/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/app" element={<MainPage />} />
    </Routes>

  );
}

export default App;
