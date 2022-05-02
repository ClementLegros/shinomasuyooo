import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import DetailCard from './Page/DetailCard';
import HomePage from './Page/HomePage';
import Incoming from './Page/Incoming';
import ListCard from './Page/ListCard';
import ListCharacter from './Page/ListCharacter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card-list" element={<ListCard />} />
      <Route path="/card-detail/:id" element={<DetailCard />} />
      <Route path="/character-list" element={<ListCharacter />} />
      <Route path="/incoming" element={<Incoming />} />
    </Routes>
  </BrowserRouter>
);
