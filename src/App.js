import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import IndexView from "./views";
import CategoriesView from "./views/categories";
import ProductsView from "./views/products";
import ProductDetail from "./views/productdetail";
import SearchView from "./views/search";
import CartView from "./views/cart";
import LogInView from "./views/login";
import SignUpView from "./views/signup";
import AdminIndexView from "./views/adminstration/";
import AdminCategoriesView from "./views/adminstration/categories";
import AdminProductsView from "./views/adminstration/products";
import AdminOrdersView from "./views/adminstration/orders";
import AdminShippingView from "./views/adminstration/shipping";
import AdminUsersView from "./views/adminstration/users";
import AdminInvoicesView from "./views/adminstration/incoives";
import UserContextProvider from "./context/UserContextProvider";
import AdminAddProductsView from "./views/adminstration/addproducts";
//import UserContext from "./context/UserContext";
import ShopContextProvider from "./context/ShopContext";
import ProtectedRoute from "./ProtectedRoute";
import {CategoryContextProvider} from "./context/CategoryContext"
import "./App.css";
function App() {
  
  // const ProtectedRoute = ({ element: Element, role, ...rest }) => (
  //   <Route
  //     {...rest}
  //     element={role === 'admin' ? <Element /> : <Navigate to="/" replace />}
  //   />
  // );
  // console.log("user=====", user.data.role);
  // const user = JSON.parse(localStorage.getItem("user"));
  // const role = user?.data?.role;
  return (
   
    <>
      <UserContextProvider>
        <ShopContextProvider>
          <CategoryContextProvider>
          <Routes>
            <Route path="/" element={<IndexView />} />
            <Route path="/categories" element={<CategoriesView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/login" element={<LogInView />} />
            <Route path="/signup" element={<SignUpView />} />
            <Route path="/dashboard"    element={<AdminIndexView />} />

            {/* <Route
              path="/dashboard"
              element={
                role === "admin" ? (
                  <AdminIndexView />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            /> */}
            <Route path="/dashboard/categories"   element={<AdminCategoriesView />}/>
            <Route path="/dashboard/products"    element={<AdminProductsView />} />
            <Route path="/addproduct"    element={<AdminAddProductsView />} />
            <Route path="/dashboard/orders"   element={<AdminOrdersView />} />
            <Route path="/dashboard/users"    element={<AdminUsersView />} />
            <Route path="/dashboard/shipping"    element={<AdminShippingView />} />
            <Route path="/dashboard/invoices"   element={<AdminInvoicesView />} />
            
          </Routes>
          </CategoryContextProvider>
        </ShopContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
