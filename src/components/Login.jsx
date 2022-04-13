import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Login.css';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    async onSubmit(values) {
      const spinner = document.querySelector('#loading-spinner');
      spinner.style.visibility = 'visible';
      await axios
        .post('/users/loginuser', {
          username: values.username,
          password: values.password,
        })
        .then((response) => {
          localStorage.setItem('regtoken', JSON.stringify(response.data.jwt));
          localStorage.setItem(
            'regtoken user',
            JSON.stringify(response.data.user)
          );
          document.querySelector('#cart').style.display = 'contents';
          document.querySelector('#add').style.display = 'block';
          document.querySelector('#list').style.display = 'block';
          document.querySelector('#edit-user').style.display = 'block';
          document.querySelector('#edit-products').style.display = 'block';
          document.querySelector('#login-btn').style.display = 'none';
          document.querySelector('#sign-up-btn').style.display = 'none';
          document.querySelector('#team1-teams').style.display = 'none';
          document.querySelector('#team1-offices').style.display = 'none';
          document.querySelector('#logout-btn').style.display = 'inline';
          localStorage.setItem('loggedIn', '1');
          spinner.style.visibility = 'hidden';
          navigate('/');
        })
        .catch((errors) => {
          console.log(errors.response.data);
          setError(errors.response.data.message);
        });
      spinner.style.visibility = 'hidden';
    },
    validate() {
      const errors = {};
      if (formik.values.password.length < 6) {
        errors.password = "Can't be less than 6 characters";
      }
      if (formik.values.username.length < 3) {
        errors.username = "Can't be less than 3 characters";
      }
      return errors;
    },
  });
  return (
    <div className="team1-login-container text-right">
      <form onSubmit={formik.handleSubmit} noValidate>
        <h1 className="team1-reg-heading">Login</h1>
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
        <div
          id="error-status"
          className="text-left text-danger text-capitalize m-1 p-2 d-flex"
        >
          <p>{error}</p>
        </div>
        <button type="submit" className="btn btn-success w-50">
          Login
        </button>
        <div
          id="loading-spinner"
          className="spinner-border text-success d-block"
          role="status"
        />
      </form>
      <p className="team1-already">
        New user ? -&gt;
        <Link className="arleadylink" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
