import React from 'react';
import './styles/Footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="mt-auto flex-shrink-0 p-1 bg-dark text-white-50 text-center">
        <a className="p-2" href="#/">
          Home
        </a>
        <a className="p-2" href="#/">
          Contact
        </a>
        <a className="p-2" href="#/">
          About
        </a>
        <a className="p-2" href="#/">
          Privacy
        </a>
        <a className="p-2" href="#/">
          Policies
        </a>
        <a className=" p-2" href="#/">
          &copy;West Agile IT Labs, 2022
        </a>
      </footer>
    </div>
  );
}
