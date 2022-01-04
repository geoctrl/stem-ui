import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/header.component';
import { Home } from './pages/home.component';

export function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/components" render={props => <Components {...props} components={components} />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
