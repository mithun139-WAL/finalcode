/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import axios from 'axios';

function DeleteButton(props) {
  const deleteFromCart = () => {
    axios
      .create({
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('regtoken')
          )}`,
        },
      })
      .delete(`/cart/${props.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };
  return (
    <div>
      <button type="button" className="btn btn-danger" onClick={deleteFromCart}>
        Delete Product
      </button>
    </div>
  );
}
export default DeleteButton;
