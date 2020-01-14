import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreatePerson extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBlacklist = this.onChangeBlacklist.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
    }

    // States 
    state = {
        name: '',
        phone: '',
        address: '',
        blacklist: false
    }

    // Functions
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        });
    }

    onChangeBlacklist = (e) => {
        this.setState({
            blacklist: true
        })
    }

    clearHandler = () => {
        this.setState({
            name: '',
            phone: '',
            address: '',
            blacklist: false
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newLists = {
            lists_name: this.state.name,
            lists_phone: this.state.phone,
            lists_address: this.state.address,
            lists_blacklist: this.state.blacklist
        }; 

        axios({
            method: 'post',
            url: 'persons/add',
            data: newLists
        }).then( res => console.log(res.data));

        this.setState({name: '', phone: '', address: '', blacklist: false});
    }

    // Forms
    render() {
        return (
            <div style={{marginTop: 20}} className="card">
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="input-field col">
                                <label>Phone</label>
                                <input
                                    value={this.state.phone}
                                    type="text"
                                    className="form-control"
                                    phone={this.state.phone}
                                    onChange={this.onChangePhone}></input>
                            </div>

                            <div className="input-field col">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    value={this.state.name}
                                    className="form-control"
                                    name={this.state.name}
                                    onChange={this.onChangeName}></input>
                            </div>
                        </div>
                        
                        <div className="input-field">
                            <label>Address</label>
                            <input 
                                type="text"
                                value={this.state.address}
                                className="form-control"
                                address={this.state.address}
                                onChange={this.onChangeAddress}></input>
                        </div>

                        <label>
                            <input 
                                type="checkbox"
                                className="filled-in"
                                onChange={this.onChangeBlacklist}>
                            </input>
                            <span>Blacklist</span>
                        </label>
                            
                        <div className="form-group">
                            <div className="btn-toolbar">
                            <div className="btn-group ml-5">
                                    <button
                                        className="btn btn-medium waves-effect waves-light hoverable red accent-2"
                                        onClick={this.clearHandler}>Clear</button>
                                </div>

                                <div className="btn-group ml-5">
                                    <button
                                        type="submit"
                                        className="btn btn-medium waves-effect waves-light hoverable green accent-3"
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

export default CreatePerson;