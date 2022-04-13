import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Categories.css';
import ProductsContext from './ProductContext';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { dispatch } = useContext(ProductsContext);
  // Fetching categories data from backend
  useEffect(() => {
    axios.get('/categories').then((response) => {
      const categoriess = response.data.map((item) => item.name);
      setCategories(['All', ...categoriess]);
    });
  }, []);
  return (
    <div className="categories">
      {categories.map((categorie) => {
        const category = categorie.replace(' ', '-').replace("'", '');
        if (category === 'All') {
          return (
            <button
              type="button"
              className="btn text-light category-item All active-category"
              key={category}
              onClick={() => {
                dispatch({ type: 'filter', category });
              }}
            >
              {category}
            </button>
          );
        }
        return (
          <button
            type="button"
            className={`btn text-light category-item ${category}`}
            key={category}
            onClick={() => {
              dispatch({ type: 'filter', category });
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
