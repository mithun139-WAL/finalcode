/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function EditProduct() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [rating, setRating] = useState();
  const [categorydata, setCategorydata] = useState([]);
  const [finalCat, setFinalCat] = useState();
  const urlParams = useParams();
  console.log('category', category);
  console.log('urlParams', urlParams);
  useEffect(() => {
    axios
      .get('/categories')
      .then((res) => setCategorydata(res.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios.get(`/products/${urlParams.id}`).then((response) => {
      console.log('output', response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setRating(response.data.rating);
    });
  }, []);
  const navigate = useNavigate();
  function updateDetails(e) {
    e.preventDefault();
    const data = {
      title,
      price,
      description,
      category: finalCat,
      rating,
    };
    axios
      .put(`/products/${urlParams.id}`, data)
      .then((response) => {
        console.log(response);
        alert('updated successfully');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
    navigate('/admin/view_products');
  }
  return (
    <div>
      <h4 className="mt-1 team3_showname team3_textcenter team3-text-white mb-5">
        Update the details of Product with Id : {urlParams.id.slice(18)}
      </h4>
      <form onSubmit={updateDetails} className="team3_ediproduct_form bg-white">
        <div>
          <label>
            <b>Title</b>
          </label>
          <input
            type="text"
            id="prodTitle"
            className="form-control mb-2"
            value={title || ''}
            onInput={(e) => setTitle(e.target.value)}
          />
          <label>
            <b>Price</b>
          </label>
          <input
            type="number"
            id="number"
            className="form-control mb-2"
            value={price || ''}
            onInput={(e) => setPrice(e.target.value)}
          />
          <label>
            <b>About Product</b>
          </label>
          <textarea
            type="text"
            className="form-control mb-2"
            id="prodDescription"
            value={description || ''}
            onInput={(e) => setDescription(e.target.value)}
          />
          <label className=" mt-2">
            <b>Category</b>
          </label>
          <br />
          <select
            name="category"
            className="form-control"
            onChange={(e) => setFinalCat(e.target.value)}
          >
            {categorydata.map((val) => {
              return <option value={val._id}>{val.name}</option>;
            })}
          </select>
          <br />
          <label className="mt-2">
            <b>Rating</b>&nbsp;&nbsp;
          </label>
          <input
            type="number"
            max="5"
            min="1"
            step="0.01"
            value={rating || ''}
            onInput={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary team3-b-btn">Save</button>
          <Link to="/admin/view_products">
            <button className="btn btn-primary team3-b-btn">Go back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default EditProduct;
