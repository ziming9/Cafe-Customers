import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios({
      method: "post",
      url: "users/register",
      data: newUser
    }).then(res => console.log(res.data));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card" style={{ marginTop: 20 }}>
              <div className="card-header">
                <h4>
                  <b>Register</b>
                </h4>
              </div>
              <div className="card-body">
                <form className="d-flex flex-column">
                  <p className="grey-text text-darken-1">Already have an account?
                  <Link to="/login"> Login</Link></p>
                  <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control"
                      value={this.state.name}
                      id="name"
                      type="text"
                      name={this.state.name}
                      onChange={this.onChange}
                    ></input>
                  </div>
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
                  <div className="input-field">
                    <label>Confirm Password</label>
                    <input
                      className="form-control"
                      value={this.state.password2}
                      id="password2"
                      type="password"
                      password2={this.state.password2}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <button
                    className="btn btn-medium waves-effect waves-light hoverable cyan accent-4"
                    onClick={this.onSubmit}
                    type="submit"
                  >
                    Sign Up
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

export default Register;
