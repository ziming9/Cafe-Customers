import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar = (props) => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Cafe-App</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/persons" className="nav-link">Lists</Link>
                    </li>
                </ul>
                <button className="btn btn-outline-success my-2 my-sm-">
                    <Link to="/register"></Link>Sign up</button>
            </div>
        </nav>
    </div>
);

export default navbar;