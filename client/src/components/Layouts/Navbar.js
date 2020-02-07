import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
    logoutHandler = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="navbar-item">
                    <div className="dropdown show">
                        <span style={{cursor: 'pointer'}}className="dropdown-toggle nav-link" id="dropdownMenuLink" data-toggle="dropdown">{user.name}</span>
                        <div className="dropdown-menu">
                            <button onClick={this.logoutHandler} className="dropdown-item">Logout</button>
                        </div>
                    </div>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="navbar-item">
                    <div data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link to="/register" className="nav-link" >Register</Link>
                    </div>
                </li>
                <li className="navbar-item">
                    <div data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>
                </li>
            </ul>
        )

    return (
        <div className="browser-default">
            <nav className="navbar navbar-expand-sm mb-4 navbar-dark" style={{ backgroundColor: '#344955'}}>
                <div className="container">
                    <Link to="/" className="navbar-brand">Cafe Customers</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <Link className="nav-link" to="/">Home</Link>
                                </div>
                            </li>
                            <li className="navbar-item">
                                <div data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <Link className="nav-link" to="/persons">Customers</Link>
                                </div>
                            </li>
                        </ul>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        </div>
    )}
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Navbar);