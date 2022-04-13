/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React from 'react';

function ClearAll() {
  const clearCart = () => {
    axios
      .create({
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('regtoken')
          )}`,
        },
      })
      .delete('/cart')
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <button type="button" onClick={clearCart} className="add">
      ClearAll
    </button>
  );
}
export default ClearAll;
