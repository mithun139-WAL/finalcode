/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-else-return */
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import profile from '../Asserts/profile.jpg';
import EditUser from './EditUser';

function UserListing() {
  const [users, setUsers] = useState([]);
  const deleteUser = (id) => {
    axios
      .delete(`/users/${id}`)
      .then(() => {
        axios.get('/users').then((response) => setUsers(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert('Error while deleting user');
      });
  };

  useEffect(() => {
    axios.get('/users').then((response) => setUsers(response.data));
  }, []);

  console.log(users);
  return (
    <section className="container-fluid team3-userlist-section text-center">
      <Routes>
        <Route path="/admin/edituser" element={<EditUser />} />
      </Routes>
      <div className="header">
        <h3 className="team3_textcenter">Showing Current Users</h3>
      </div>
      <div className="row ">
        {users.map((val) => (
          <div className="team3-products col-lg-3 col-md-6 col-sm-6">
            <div key={val._id}>
              <div className="team3-userlist-title">
                <img
                  className="team3_img-p"
                  src={profile}
                  alt="User goes here"
                />
                <h3 className="card-title mt-3 ml-3 team3_showname">
                  {val.username}
                </h3>
              </div>
              <div className="team3_username_display">
                username : <b>{val.username}</b>
              </div>
              <div>
                <p>
                  Id : <b>{val._id}</b>
                </p>
              </div>
              <div className="card-body">
                <h4 className="text-center team3-addressdiv">Address</h4>
                <p>{val.address}</p>
              </div>
              <button
                className="btn btn-danger m-2"
                onClick={() => deleteUser(val._id)}
              >
                Delete
              </button>
              <Link to={`/admin/edituser/${val._id}`}>
                <button className="btn btn-info">Edit Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default UserListing;
