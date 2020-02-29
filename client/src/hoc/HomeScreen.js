import React from 'react';
import { Link } from "react-router-dom";
import './HomeScreen.css';

//redundant file, can be deleted
const homeScreen = () => (
    <div className="landing">
        <div className="dark-overlay landing-inner text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-4 mb-4">Cafe Customers</h1>
                        <p>Create an account and store your customers privately</p>
                        <Link to="/register" className="btn">Sign Up</Link>
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default homeScreen;