import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { isAuthenticated, user } = this.props.auth;

    const homeScreen = (
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

    const dashBoard = (
      <div style={{ marginTop: 20 }} className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4>Welcome {user.name}</h4>
            <div>
              <p className="text-secondary">What would you like to do today?</p>
              <Link to="/persons_list">
                <button className="btn"
                  style={{marginTop: 10, backgroundColor: "#344955", color: "white"}}>Add customers</button>
              </Link>
              <Link to="/persons">
                <button 
                  className="btn" 
                  style={{marginTop: 10, backgroundColor: "#344955", color: "white"}}>View customers</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )

return (
  <div>
    {isAuthenticated ? dashBoard : homeScreen}
  </div>    
  )}
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);