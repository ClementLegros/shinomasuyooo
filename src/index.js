import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import DetailCard from './Page/Card/DetailCard';
import HomePage from './Page/HomePage';
import Incoming from './Page/Incoming';
import ListCard from './Page/Card/ListCard';
import ListCharacter from './Page/Character/ListCharacter';
import SettingPage from './Page/Setting/SettingPage';
import { ThemeProvider } from './Components/Theme/ThemeContext';
import Background from './Components/Theme/Background';
import ListCardCharacter from './Page/Character/ListCardCharacter';
import NotFound from './Page/NotFound';
import RickRoll from './Page/RickRoll';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card" element={<ListCard />} />
          <Route path="/card/:id" element={<DetailCard />} />
          <Route path="/character" element={<ListCharacter />} />
          <Route path="/character-card/:id" element={<ListCardCharacter />} />
          <Route path="/incoming" element={<Incoming />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/card/special" element={<RickRoll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Background>
  </ThemeProvider>
);
