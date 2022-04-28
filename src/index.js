import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import DetailCard from './Page/DetailCard';
import HomePage from './Page/HomePage';
import ListCard from './Page/ListCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card-list" element={<ListCard />} />
      <Route path="/card-detail/:id" element={<DetailCard />} />
    </Routes>
  </BrowserRouter>
);
