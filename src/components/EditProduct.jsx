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
  const [finalCat, setFinalCat] = useState('');
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
      <h4 className="mt-1 team3_showname team3_textcenter team3-text-white">
        Update the details of Product with Id :{urlParams.id}
      </h4>
      <form onSubmit={updateDetails} className="team3_ediproduct_form">
        <div>
          <label className="team3-text-white">Title</label>
          <input
            type="text"
            id="prodTitle"
            className="form-control mb-2"
            value={title || ''}
            onInput={(e) => setTitle(e.target.value)}
          />
          <label className="team3-text-white">Price</label>
          <input
            type="number"
            id="number"
            className="form-control mb-2"
            value={price || ''}
            onInput={(e) => setPrice(e.target.value)}
          />
          <label className="team3-text-white">About Product</label>
          <textarea
            type="text"
            className="form-control mb-2"
            id="prodDescription"
            value={description || ''}
            onInput={(e) => setDescription(e.target.value)}
          />
          <label className="team3-text-white mt-2">Rating</label>
          <input
            type="number"
            max="5"
            min="1"
            step="0.01"
            value={rating || ''}
            onInput={(e) => setRating(e.target.value)}
          />
          <div className="col-lg-6 col-sm-12 col-md-6">
            <label className="team3-text-white mt-2">Category</label>
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
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary  m-2">Save</button>
          <Link to="/admin/view_products">
            <button className="btn btn-primary m-2">Go back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default EditProduct;
