import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/header.component';
import { Home } from './pages/home/home.component';
import { Components } from './pages/components/components.component';

export function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}
