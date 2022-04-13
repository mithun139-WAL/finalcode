/* eslint-disable no-else-return */
import React, { useContext } from 'react';
import ProductsContext from './ProductContext';
import SlideingCard from './SlideingCard';
import './styles/ProductSlider.css';

export default function ProductSlider() {
  const { state } = useContext(ProductsContext);
  const length = state.products.length;
  if (length >= 1) {
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12">
            <h2>
              <b>Featured Products</b>
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="2000"
            >
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="row">
                    {length >= 1 ? (
                      <SlideingCard
                        key={1}
                        product={state.products[0]}
                        position="first"
                      />
                    ) : null}
                    {length >= 2 ? (
                      <SlideingCard
                        key={2}
                        product={state.products[1]}
                        position="second"
                      />
                    ) : null}
                    {length >= 3 ? (
                      <SlideingCard
                        key={3}
                        product={state.products[2]}
                        position="third"
                      />
                    ) : null}
                  </div>
                </div>
                {length >= 4 ? (
                  <div className="item carousel-item">
                    <div className="row">
                      {length >= 4 ? (
                        <SlideingCard
                          key={4}
                          product={state.products[3]}
                          position="first"
                        />
                      ) : null}
                      {length >= 5 ? (
                        <SlideingCard
                          key={5}
                          product={state.products[4]}
                          position="second"
                        />
                      ) : null}
                      {length >= 6 ? (
                        <SlideingCard
                          key={6}
                          product={state.products[5]}
                          position="third"
                        />
                      ) : null}
                    </div>
                  </div>
                ) : null}
                {length >= 7 ? (
                  <div className="item carousel-item">
                    <div className="row">
                      {length >= 7 ? (
                        <SlideingCard
                          key={7}
                          product={state.products[6]}
                          position="first"
                        />
                      ) : null}
                      {length >= 8 ? (
                        <SlideingCard
                          key={8}
                          product={state.products[7]}
                          position="second"
                        />
                      ) : null}
                      {length >= 9 ? (
                        <SlideingCard
                          key={9}
                          product={state.products[8]}
                          position="third"
                        />
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
