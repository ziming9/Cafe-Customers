import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar = (props) => (
    <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
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
                <div className="col-1.5">
                <Link to="/register">
                    <button className="btn btn-medium waves-effect waves-light hoverable cyan accent-4">Register</button>
                </Link>
                </div>
                <div className="col-1">
                <Link to="/login">
                    <button className="btn btn-medium waves-effect waves-light hoverable green accent-3">Login</button>
                </Link>
                </div>
            </div>
        </nav>
    </div>
);

export default navbar;