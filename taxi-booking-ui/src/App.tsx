import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home.tsx';
import { RegisterTaxi } from './components/RegisterTaxi.tsx';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-taxi" element={<RegisterTaxi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

