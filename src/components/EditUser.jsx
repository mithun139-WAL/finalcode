/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EditUser() {
  const [usernameOne, setUsername] = useState();
  const [addressOne, setAddress] = useState();
  const [emailOne, setEmail] = useState();
  const urlParams = useParams();
  useEffect(() => {
    axios.get(`/users/${urlParams.id}`).then((response) => {
      console.log(response.data);
      setUsername(response.data.user.username);
      setAddress(response.data.user.address);
      setEmail(response.data.user.email);
    });
  }, []);
  const navigate = useNavigate();

  function updateDetails(e) {
    e.preventDefault();
    const data = {
      username: usernameOne,
      address: addressOne,
      email: emailOne,
    };
    axios
      .put(`/users/${urlParams.id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log('er', err));
    navigate('/admin/view_users');
  }
  return (
    <div>
      <h4 className="mt-1 team3_showname team3_textcenter team3-text-white">
        Changing the details of user with Id :{urlParams.id.slice(-6)}
      </h4>
      <form className="team3_ediproduct_form">
        <h6 className="team3-text-white">Email</h6>
        <input
          type="email"
          placeholder="email"
          className="form-control mb-2"
          id="user_email"
          value={emailOne || ''}
          onInput={(e) => setEmail(e.target.value)}
        />
        <h6 className="team3-text-white">Username</h6>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="form-control mb-2"
          value={usernameOne || ''}
          onInput={(e) => setUsername(e.target.value)}
        />
        <h6 className="team3-text-white">Address</h6>
        <textarea
          type="text"
          id="address"
          placeholder="address"
          git
          className="form-control mb-2"
          value={addressOne || ''}
          onInput={(e) => setAddress(e.target.value)}
        />
        <div className="text-center">
          <button className="btn btn-primary m-2" onClick={updateDetails}>
            Save Edits
          </button>
          <Link to="/admin/view_users">
            <button className="btn btn-primary m-2">Go Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
