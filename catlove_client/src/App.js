import React from 'react';
import Header from './Header';
import { Main, Product } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/product/*" element={<Product />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
