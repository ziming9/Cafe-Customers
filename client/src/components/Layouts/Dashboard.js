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
    const { user } = this.props.auth;

return (
      <div style={{ marginTop: 20 }} className="container">
        <div className="row">
          <div className="mx-auto">
            <h4>Welcome {user.name}</h4>
            <div>
              <p className="text-secondary">What would you like to do today?</p>
              <Link to="/persons">
                <button 
                  className="btn" 
                  style={{marginTop: 20, backgroundColor: "#344955", color: "white"}}>View customers</button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);