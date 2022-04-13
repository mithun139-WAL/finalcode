/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import ProductContext from './components/ProductContext';
import Footer from './components/Footer';
import Registration from './components/Registration';
import ProductsReducer from './components/ProductReducer';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import AddProducts from './components/AddProducts';
import ListProducts from './components/List';
import ShowProduct from './components/ShowCart';
import EditUser from './components/EditUser';
import UserListing from './components/UserListing';
import ProductListing from './components/ProductsListing';
import EditProduct from './components/EditProduct';
// import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [stateStatus, setStateStatus] = useState(false);
  const initialState = { products: [] };
  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  useEffect(() => {
    axios.get('/products').then((response) => {
      const products = [];
      response.data.forEach((product) => {
        let productImage = null;
        try {
          productImage = product.image;
        } catch (error) {
          productImage = null;
        }
        products.push({
          id: product._id,
          title: product.title,
          price: product.price,
          description: product.description,
          rating: product.rating,
          category: product.category.name,
          image: productImage,
        });
      });
      dispatch({ type: 'set-products', productList: products });
      setStateStatus(true);
    });
  }, []);

  return (
    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <ProductContext.Provider value={{ state, dispatch, stateStatus }}>
        <BrowserRouter>
          <MainMenu />
          <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/add-product" element={<AddProduct />} />
            </Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddProducts />} />
            <Route path="/list" element={<ListProducts />} />
            <Route path="/show" element={<ShowProduct />} />
            <Route path="/admin/view_users" element={<UserListing />} />
            <Route path="/admin/view_products" element={<ProductListing />} />
            <Route path="/admin/edituser/:id" element={<EditUser />} />
            <Route path="/admin/editproduct/:id" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
      <Footer />
    </div>
  );
}
