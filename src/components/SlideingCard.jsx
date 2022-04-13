/* eslint-disable prefer-template */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from 'react';

export default function SlideingCard(props) {
  const { product, position } = props;

  return (
    <div className={`col-sm-4 ${position}`}>
      <div className="thumb-wrapper">
        <div className="img-box">
          <img
            className="team1-card-img-top"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="thumb-content">
          <h6>{product.title}</h6>

          <p className="item-price">
            <b>{`₹ ${product.price}`}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
