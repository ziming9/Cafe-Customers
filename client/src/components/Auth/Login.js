import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
    }
}

componentWillReceiveProps(nextProps) {
  if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
  }

  if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
  }
}

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

render() {
    const { errors } = this.state;
return (
  <div className="container">
  <div className="row">
    <div className="col-md-5 mx-auto">
      <div className="card" style={{ marginTop: 20 }}>
        <div className="card-header">
          <h4>
            <b>Login</b>
          </h4>
        </div>
        <div className="card-body">
          <form className="d-flex flex-column">
            <p className="text-secondary">Don't have an account?
            <Link to="/register"> Register</Link></p>
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.email}
                id="email"
                type="email"
                placeholder="Email Address"
                email={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              ></input>
              <span className="invalid-feedback d-block">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.password}
                id="password"
                type="password"
                placeholder="Password"
                password={this.state.name}
                onChange={this.onChange}
                error={errors.password}
              ></input>
              <span className="invalid-feedback d-block">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
            </div>
            <p className="align-self-end">
              <Link to="/register">Forgot password?</Link>
            </p>
            <button
              className="btn"
              style={{backgroundColor: "#344955", color: "white"}}
              onClick={this.onSubmit}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);