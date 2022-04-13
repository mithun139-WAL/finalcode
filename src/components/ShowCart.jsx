/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable space-unary-ops */
/* eslint-disable arrow-spacing */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import ClearAll from './ClearAll';

import './styles/List.css';

const Styles = styled.div`
  td,
  th {
    border: 1px solid #000;
    padding: 10px;
  }
  th {
    background-color: #abab;
  }
  td {
    color: #ccc;
  }
  table {
    text-align: center;
  }
`;
function ShowProduct() {
  const [cart, setCart] = useState([]);
  // Removing the cart item from the cart list
  const delet = (cartId) => {
    const newCart = cart.filter((val) => val._id !== cartId);
    setCart(newCart);
  };
  // Removing all the cart items from the cart list
  const clear = () => {
    setCart([]);
  };
  // Fetching cart data from backend
  useEffect(() => {
    axios
      .create({
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('regtoken')
          )}`,
        },
      })
      .get('/cart')
      .then((response) => {
        console.log(response.data);
        setCart(response.data);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  }, []);

  return (
    <Styles>
      <div className="App">
        <table className="border border-secondary my-5">
          <thead>
            <tr>
              <td colSpan="4" onClick={() => clear()}>
                <ClearAll />
              </td>
            </tr>
            <tr>
              <th>ID</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((val) => (
              <tr>
                <td>{val._id}</td>
                <td>{val.products[0].product.title}</td>
                <td>
                  {`₹${
                    val.products[0].product.price * val.products[0].quantity
                  }`}
                </td>
                <td onClick={() => delet(val._id)}>
                  <DeleteButton id={val._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Styles>
  );
}
export default ShowProduct;
