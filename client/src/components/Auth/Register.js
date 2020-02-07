import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
    }
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

    // axios({
    //   method: 'post',
    //   url: '/users/register',
    //   data: newUser
    // }).then(res => console.log(res.data));

    // this.setState({name: '', email: '', password: '', password2: ''});
    // this.props.history.push('/login');
    this.props.registerUser(newUser, this.props.history);
  };
  

  render() {

    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="card" style={{ marginTop: 20 }}>
              <div className="card-header" style={{backgroundColor: '#334854', color: 'white'}}>
                <h4>
                  Register
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit} className="d-flex flex-column">
                  <p className="text-secondary">Already have an account?
                  <Link to="/login"> Login</Link></p>
                  <div className="form-group">
                    <input
                      className='form-control'
                      value={this.state.name}
                      id="name"
                      type="text"
                      placeholder="Name"
                      onChange={this.onChange}
                      error={errors.name}></input>
                    <span className="invalid-feedback d-block">{errors.name}</span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={this.state.email}
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      onChange={this.onChange}
                      error={errors.email}></input>
                    <span className="invalid-feedback d-block">{errors.email}</span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={this.state.password}
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.onChange}
                      error={errors.password}></input>
                    <span className="invalid-feedback d-block">{errors.password}</span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      value={this.state.password2}
                      id="password2"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={this.onChange}
                      error={errors.password2}></input>
                    <span className="invalid-feedback d-block">{errors.password2}</span>
                  </div>
                  <button
                    style={{marginTop: 20, backgroundColor: "#344955", color: "white"}}
                    className="btn"
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
