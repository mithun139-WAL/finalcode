/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductListing() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get('/products/')
      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get('/categories')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = (id) => {
    const updatedUsers = data.filter((val) => {
      if (val._id === id) {
        return false;
      }
      return true;
    });
    setData(updatedUsers);
    axios.delete(`/products/${id}`);
    console.log(id);
  };
  useEffect(() => {
    axios
      .get('/products/')
      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get('/categories')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="team3_productsMargin">
      <h4 className="m-2 mb-3 team3_showname team3-text-white ">
        Displaying products
      </h4>
      {data.map((val) => (
        <div className="team3-products ">
          <div className="card team3_divimg m-5">
            <img
              className="team3-card-img-top"
              alt={val.title}
              src={val.image}
            />
            <div className="card-body">
              <div>
                <h4>{val.title}</h4> <br />
                <h6>{val.description}</h6>
              </div>
              <h6>Category : {val.category.name} </h6>
              <h5 className="aligncenter">
                Price : <b>${val.price}</b>
              </h5>
              <p className="p-pp alignleft">
                <span className="team3_ratingRate">{val.rating}★</span>
              </p>
              <div className="d-flex flex-row-reverse">
                <Link to={`/admin/editproduct/${val._id}`}>
                  <button className="btn btn-primary btn-sm m-2">
                    Edit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => deleteProduct(val._id)}
                >
                  Delete
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
