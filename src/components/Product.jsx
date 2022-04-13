/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-template */
import React from 'react';
import Rating from 'react-rating';

export default function Product(props) {
  const { product } = props;
  const category = product.category;

  return (
    <div className={`card m-3 product team1-card ${category}`}>
      <img
        className="team1-card-img-top"
        src={product.image}
        alt={product.title}
      />
      <div className="card-body team1-card-body text-left">
        <h6 className="team1-card-title">{product.title}</h6>
        <p className="team1-card-text text-muted">{product.description}</p>
        <div className="team1-rating">
          <Rating
            className="d-block"
            start={0}
            stop={5}
            step={1}
            fractions={10}
            initialRating={product.rating}
            readonly
          />
          <h6>{product.rating}</h6>
        </div>
        <div className="mt-2 row">
          <h5 className="col price w-50 d-inline">{`₹ ${product.price}`}</h5>
        </div>
      </div>
    </div>
  );
}
