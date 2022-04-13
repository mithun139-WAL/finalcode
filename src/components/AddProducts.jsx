/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable indent */
/* eslint-disable object-shorthand */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import './styles/List.css';

export default function AddProducts() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState('');
  const [finalCat, setFinalCat] = useState('');
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  useEffect(() => {
    axios
      .get('/categories')
      .then((res) => {
        setCategory(res.data);
        console.log('Category', res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const addProduct = async (e) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', finalCat);
    formData.append('rating', rating);
    try {
      const res = await axios.post('http://localhost:3000/products/', formData);
      alert('Product added successfully');
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div>
      <h1 className="text-center">Add Product</h1>
      <div className="card mx-auto col-lg-4 col-md-6 p-3 my-5">
        <input
          type="text"
          name="productName"
          className="form-control my-3  mx-auto"
          placeholder="Enter Product Name"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="number"
          name="productPrice"
          className="form-control my-3 mx-auto"
          placeholder="Enter Product Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="file"
          accept="image/*"
          name="productImage"
          className="form-control my-3 mx-auto"
          onChange={saveFile}
          id="file_input"
        />

        <input
          type="number"
          name="initialRating"
          className="form-control my-3 mx-auto"
          placeholder="Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
        <select
          name="category"
          className="form-control"
          onChange={(e) => {
            setFinalCat(e.target.value);
          }}
        >
          <option>Select category</option>
          {category.map((val) => {
            return <option value={val._id}>{val.name}</option>;
          })}
        </select>
        <textarea
          className="form-control my-3 mx-auto"
          placeholder="Enter Description of the product......"
          name="productDescription"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="btn btn-primary " type="submit" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}
