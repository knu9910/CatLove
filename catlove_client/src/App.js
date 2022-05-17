import React, { useState, useEffect } from 'react';
import Header from './Header';
import {
  Main,
  Product,
  Order,
  Board,
  BsetProducts,
  NotFound,
  Detail,
} from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { data, review } from './fakedata';
import PropTypes from 'prop-types';

function App() {
  // const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [bestlist, setBestlist] = useState([]);
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    setProducts(data);
    setBestlist(data);
    setreviews(review);
  });

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main products={products} />}></Route>
          <Route
            path="/product"
            element={<Product products={products} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<Detail products={products} />}
          ></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/board" element={<Board reviews={reviews} />}></Route>
          <Route
            path="/bestProducts"
            element={<BsetProducts bestlist={bestlist} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.PropTypes = {
  products: PropTypes.array,
};

export default App;
