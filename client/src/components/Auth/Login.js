import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      //errors: {}
    };
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
console.log(userData);
  };
render() {
    //const { errors } = this.state;
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
            <p className="grey-text text-darken-1">Don't have an account?
            <Link to="/register"> Register</Link></p>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                value={this.state.email}
                id="email"
                type="email"
                email={this.state.email}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                className="form-control"
                value={this.state.password}
                id="password"
                type="password"
                password={this.state.name}
                onChange={this.onChange}
              ></input>
            </div>
            <p className="grey-text text-darken-1 align-self-end">
              <Link to="/register">Forgot password?</Link>
            </p>
            <button
              className="btn btn-medium waves-effect waves-light hoverable green accent-3"
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
export default Login;