import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => (
    <div className="browser-default">
        <nav className="navbar navbar-expand-sm mb-4 navbar-dark" style={{ backgroundColor: '#344955'}}>
            <div className="container">
                <Link to="/" className="navbar-brand">Cafe Customers</Link>
                <button className="navbar-toggler material-icons" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link className="nav-link" to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/persons">Customers</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default navbar;