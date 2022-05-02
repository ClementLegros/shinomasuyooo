import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import DetailCard from './Page/Card/DetailCard';
import HomePage from './Page/HomePage';
import Incoming from './Page/Incoming';
import ListCard from './Page/Card/ListCard';
import ListCharacter from './Page/Character/ListCharacter';
import SettingPage from './Page/Settingz/SettingPage';
import { ThemeProvider } from './Components/Theme/ThemeContext';
import Background from './Components/Theme/Background';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Background>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card-list" element={<ListCard />} />
          <Route path="/card-detail/:id" element={<DetailCard />} />
          <Route path="/character-list" element={<ListCharacter />} />
          <Route path="/incoming" element={<Incoming />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </Background>
    </ThemeProvider>
  </BrowserRouter>
);
