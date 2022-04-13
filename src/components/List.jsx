/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from 'react-rating';
import './styles/List.css';

function ListProducts() {
  const [product, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const cart = (val) => {
    // eslint-disable-next-line no-alert
    alert('added to cart');
    console.log('val', val);
    console.log('val', JSON.parse(localStorage.getItem('regtoken user'))._id);
    console.log('valId', val._id);
    console.log('quantity', quantity);
    axios
      .post('/cart', {
        // eslint-disable-next-line no-undef
        userId: JSON.parse(localStorage.getItem('regtoken user'))._id,
        products: {
          product: val._id,
          quantity: quantity,
        },
      })
      .then((response) => {
        console.log('User profile', response.data);
      });
  };

  useEffect(() => {
    axios
      .create({
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('regtoken')
          )}`,
        },
      })
      .get('/products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  }, []);
  return (
    <div className="container-fluid">
      <h1 className="text-center mb-5">Listing Products</h1>
      <div className="row">
        {product.map((val) => {
          return (
            <div className="mb-3 col-lg-4 col-md-5 col-sm-6 ">
              <div className="card team2-product-card">
                <img
                  className="card-img-top team2-img"
                  // eslint-disable-next-line prefer-template
                  src={val.image}
                  alt=".."
                />
                <div className="card-body team2-card-body">
                  <div className="team2-titlediv">
                    <p className="team2-title">{val.title}</p>
                  </div>
                  <p className="text-center">₹{val.price}</p>
                  <p>
                    <span className="team2-category">
                      {val.category == null ? null : val.category.name}
                    </span>
                  </p>
                  <p>
                    <span className="team2-rating">
                      <Rating
                        className="d-block"
                        start={0}
                        stop={5}
                        step={1}
                        fractions={10}
                        initialRating={val.rating}
                        readonly
                      />{' '}
                    </span>
                  </p>
                  <div>
                    <input
                      className="team2-quantity mt-4"
                      type="number"
                      placeholder="Enter Quantity"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                    {/* eslint-disable-next-line react/button-has-type */}
                    <button
                      className="btn btn-primary col-12 mt-3"
                      onClick={() => cart(val)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ListProducts;
