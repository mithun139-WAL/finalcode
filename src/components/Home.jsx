import React, { Fragment, useContext } from 'react';
import Categories from './Categories';
import ProductsContext from './ProductContext';
import ProductsContainer from './ProductsContainer';
import ProductSlider from './ProductSlider';

export default function Home() {
  const { stateStatus } = useContext(ProductsContext);
  return (
    <div>
      {stateStatus ? (
        <>
          <Categories />
          <ProductsContainer />
          <ProductSlider />
        </>
      ) : null}
    </div>
  );
}
