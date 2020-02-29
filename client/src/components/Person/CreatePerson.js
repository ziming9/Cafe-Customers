import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import axios from 'axios';
import { createPerson } from '../../actions/personActions';
import { createPrivatePerson } from '../../actions/personActions';

class CreatePerson extends Component {
    constructor(props) {
        super(props);

        // States 
        this.state = {
            phone: '',
            name: '',
            address: '',
            blacklist: false,
            //private: false,
            errors: {}
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onChangeBlacklist = (e) => {
        this.setState({
            blacklist: true
        })
    }

    // onChangePrivate = e => {
    //     this.setState({
    //         private: true
    //     })
    // }

    clearHandler = (e) => {
        e.preventDefault();

        this.setState({
            name: '',
            phone: '',
            address: '',
            blacklist: false
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newPerson = {
            lists_phone: this.state.phone,
            lists_name: this.state.name,
            lists_address: this.state.address,
            lists_blacklist: this.state.blacklist
        };

        // if (this.state.private === true) {
        //     this.props.createPrivatePerson(newPerson);
        // } else {
        //     this.props.createPerson(newPerson);
        // }

        this.props.createPrivatePerson(newPerson);

        // axios({
        //     method: 'post',
        //     url: 'persons/add',
        //     data: newPerson
        // }).then( res => console.log(res.data));
        this.setState({phone: '', name: '', address: '', blacklist: false});
    }

    // Forms
    render() {
        const { errors } = this.state;
        // const { isAuthenticated} = this.props.auth;

        // const authCreatePerson = (
        //     <label className="col">
        //         <input
        //             type="checkbox"
        //             className="filled-in"
        //             onChange={this.onChangePrivate}>
        //         </input>
        //         <span>Private</span>
        //     </label>
        // )

        return (
            <div style={{marginTop: 20}} className="card">
                <div className="card-header" style={{backgroundColor: '#334854', color: 'white'}}>
                    <h4>
                        Create Customer
                    </h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="form-group col">
                                <input
                                    value={this.state.phone}
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Phone"
                                    onChange={this.onChange}
                                    error={errors.lists_phone}></input>
                                <span className="invalid-feedback d-block">{errors.lists_phone}</span>
                            </div>

                            <div className="form-group col">
                                <input 
                                    type="text"
                                    id="name"
                                    value={this.state.name}
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={this.onChange}></input>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <input 
                                type="text"
                                id="address"
                                value={this.state.address}
                                className="form-control"
                                placeholder="Address"
                                onChange={this.onChange}></input>
                        </div>
                        
                        <div className="row">
                            <label className="col">
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    onChange={this.onChangeBlacklist}>
                                </input>
                                <span>Blacklist</span>
                            </label>

                            {/* {isAuthenticated ? authCreatePerson : null} */}
                        </div>
                
                        <div className="row">
                            <div className="btn-toolbar">
                                <div className="btn-group ml-5">
                                    <button
                                        className="btn"
                                        style={{backgroundColor: "#5f7481", color: "white"}}
                                        onClick={this.clearHandler}>Clear</button>
                                </div>

                                <div className="btn-group ml-5">
                                    <button
                                        type="submit"
                                        className="btn"
                                        style={{backgroundColor: "#344955", color: "white"}}
                                        onClick={this.onSubmit}>Create</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

CreatePerson.propTypes = {
    createPerson: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});

export default connect(mapStateToProps, {createPerson, createPrivatePerson})(CreatePerson);
