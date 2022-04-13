import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/MainMenu.css';

export default function MainMenu() {
  const navigate = useNavigate();
  window.onload = () => {
    if (localStorage.getItem('regtoken')) {
      document.querySelector('#cart').style.display = 'contents';
      document.querySelector('#add').style.display = 'block';
      document.querySelector('#list').style.display = 'block';
      document.querySelector('#edit-user').style.display = 'block';
      document.querySelector('#edit-products').style.display = 'block';
      document.querySelector('#login-btn').style.display = 'none';
      document.querySelector('#sign-up-btn').style.display = 'none';
      document.querySelector('#logout-btn').style.display = 'inline';
      document.querySelector('#team1-teams').style.display = 'none';
      document.querySelector('#team1-offices').style.display = 'none';
    }
  };
  const onLogOut = () => {
    localStorage.setItem('regtoken', '');
    document.querySelector('#add').style.display = 'none';
    document.querySelector('#cart').style.display = 'none';
    document.querySelector('#list').style.display = 'none';
    document.querySelector('#edit-user').style.display = 'none';
    document.querySelector('#edit-products').style.display = 'none';
    document.querySelector('#login-btn').style.display = 'inline';
    document.querySelector('#sign-up-btn').style.display = 'inline';
    document.querySelector('#logout-btn').style.display = 'none';
    document.querySelector('#team1-teams').style.display = 'block';
    document.querySelector('#team1-offices').style.display = 'block';
    navigate('/');
  };
  return (
    <div className="header-blue">
      <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WAL Store
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li id="add" className="nav-item" role="presentation">
                <Link className="nav-link" to="/add">
                  Add Product
                </Link>
              </li>
              <li id="list" className="nav-item" role="presentation">
                <Link className="nav-link" to="/list">
                  List Products
                </Link>
              </li>
              <li id="edit-user" className="nav-item" role="presentation">
                <Link className="nav-link" to="/admin/view_users">
                  Edit Users
                </Link>
              </li>
              <li id="edit-products" className="nav-item" role="presentation">
                <Link className="nav-link" to="/admin/view_products">
                  Edit Products
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="#/">
                  About
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="#/">
                  Contact
                </Link>
              </li>
              <li className="nav-item" id="team1-teams" role="presentation">
                <Link className="nav-link" to="#/">
                  Teams
                </Link>
              </li>
              <li className="nav-item" id="team1-offices" role="presentation">
                <Link className="nav-link" to="#/">
                  Offices
                </Link>
              </li>
            </ul>
            <div className="ml-auto text-right">
              <Link
                id="login-btn"
                className="btn action-button m-1"
                to="/login"
              >
                Log In
              </Link>
              <Link
                id="sign-up-btn"
                className="btn action-button m-1"
                to="/register"
              >
                Sign Up
              </Link>
              <Link id="cart" to="/show" className="btn action-button m-1">
                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" />
              </Link>
              <button
                type="button"
                id="logout-btn"
                className="btn action-button m-1"
                onClick={onLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
