import React from 'react'
import {Routes, Route} from 'react-router-dom'
import IndexView from './views';
import CategoriesView from './views/categories';
import ProductsView from './views/products';
import SearchView from './views/search';
import CartView from './views/cart';
import LogInView from './views/login';
import SignUpView from './views/signup';
import AdminIndexView from './views/adminstration/'
import AdminCategoriesView from './views/adminstration/categories';
import AdminProductsView from './views/adminstration/products';
import AdminOrdersView from './views/adminstration/orders';
import AdminShippingView from './views/adminstration/shipping';
import AdminUsersView from './views/adminstration/users';
import AdminInvoicesView from './views/adminstration/incoives';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<IndexView />}></Route>
        <Route  path="/categories" element={<CategoriesView />}></Route>
        <Route  path="/products" element={<ProductsView />}></Route>
        <Route  path="/search" element={<SearchView />}></Route>
        <Route  path="/cart" element={<CartView />}></Route>
        <Route  path="/login" element={<LogInView />}></Route>
        <Route  path="/signup" element={<SignUpView />}></Route>
        <Route  path="/dashboard" element={<AdminIndexView />}></Route>
        <Route  path="/dashboard/categories" element={<AdminCategoriesView />}></Route>
        <Route  path="/dashboard/products" element={<AdminProductsView />}></Route>
        <Route  path="/dashboard/orders" element={<AdminOrdersView />}></Route>
        <Route  path="/dashboard/users" element={<AdminUsersView />}></Route>
        <Route  path="/dashboard/shipping" element={<AdminShippingView />}></Route>
        <Route  path="/dashboard/invoices" element={<AdminInvoicesView />}></Route>
      </Routes>
  </>
  );
}

export default App;
