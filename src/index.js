import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Projects from './Project';
import Experience from './Experience';
import Achievement from './Achievement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />}></Route>
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/home' element={<App />} />
        <Route path='/blog' element={<App />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/achievement' element={<Achievement />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
