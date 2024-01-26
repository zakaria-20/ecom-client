import React from 'react'
import {Routes, Route} from 'react-router-dom'
import IndexView from './views';
import CategoriesView from './views/categories';
import ProductsView from './views/products';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<IndexView />}></Route>
        <Route  path="/categories" element={<CategoriesView />}></Route>
        <Route  path="/products" element={<ProductsView />}></Route>
        <Route  path="/search" element={<IndexView />}></Route>
        <Route  path="/cart" element={<IndexView />}></Route>
      </Routes>
  </>
  );
}

export default App;
