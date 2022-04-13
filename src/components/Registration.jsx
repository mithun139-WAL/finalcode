import axios from 'axios';
import { useFormik } from 'formik';
import './styles/Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Registration() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      name: '',
      address: '',
      phone: '',
    },
    onSubmit: async (values) => {
      const spinner = document.querySelector('#loading-spinner');
      spinner.style.visibility = 'visible';
      await axios
        .post('/users', {
          username: values.username,
          email: values.email,
          password: values.password,
          name: values.name,
          address: values.address,
          phone: values.phone,
        })
        .then((response) => {
          console.log(response.data);
          // localStorage.setItem('regtoken', JSON.stringify(response.data.jwt));
          localStorage.setItem('regtoken user', JSON.stringify(response.data));
          console.log('User profile', response.data.user);
          // console.log('User token', response.data.jwt);
          // document.querySelector('#cart').style.display = 'contents';
          // document.querySelector('#add').style.display = 'block';
          // document.querySelector('#list').style.display = 'block';
          // document.querySelector('#login-btn').style.display = 'none';
          // document.querySelector('#sign-up-btn').style.display = 'none';
          // document.querySelector('#logout-btn').style.display = 'inline';
          // localStorage.setItem('loggedIn', '1');
          spinner.style.visibility = 'hidden';
          navigate('/login');
        })
        .catch((errors) => {
          console.log('An error occurred:', errors.response.data);
          setError(errors.response.data.message);
        });
      spinner.style.visibility = 'hidden';
    },
    validate() {
      const errors = {};
      if (formik.values.password.length < 8) {
        errors.password = "Can't be less than 8 characters";
      }
      if (formik.values.email.length < 10) {
        errors.email = "Can't be less than 10 characters";
      }
      if (formik.values.username.length < 7) {
        errors.username = "Can't be less than 7 characters";
      }
      if (formik.values.name.length < 5) {
        errors.name = "Can't be less than 5 characters";
      }
      if (formik.values.address.length < 10) {
        errors.address = "Can't be less than 10 characters";
      }
      if (formik.values.phone.length < 10) {
        errors.phone = "Can't be less than 10 characters";
      }
      return errors;
    },
  });

  return (
    <div className="team1-registration-form-container text-right">
      <form onSubmit={formik.handleSubmit} noValidate>
        <h1 className="team1-reg-heading">Registration</h1>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter email address"
          />
          <p className="team1-validation-error">
            {formik.errors.email ? formik.errors.email : null}
          </p>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="Enter username"
          />
          <p className="team1-validation-error">
            {formik.errors.username ? formik.errors.username : null}
          </p>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter password"
          />
          <p className="team1-validation-error">
            {formik.errors.password ? formik.errors.password : null}
          </p>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter Name"
          />
          <p className="team1-validation-error">
            {formik.errors.name ? formik.errors.name : null}
          </p>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.address}
            placeholder="Enter address"
          />
          <p className="team1-validation-error">
            {formik.errors.address ? formik.errors.address : null}
          </p>
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phone"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder="Enter phone"
          />
          <p className="team1-validation-error">
            {formik.errors.phone ? formik.errors.phone : null}
          </p>
        </div>
        <div className="text-left text-danger text-capitalize m-1 p-2">
          {error}
        </div>
        <button type="submit" className="btn btn-success w-50">
          Register
        </button>
        <div
          id="loading-spinner"
          className="spinner-border text-success d-block"
          role="status"
        />
      </form>
      <p className="team1-already">
        Already a user ? -&gt;
        <Link className="arleadylink" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}
