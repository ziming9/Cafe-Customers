import React, {Component} from 'react';
import axios from 'axios';

class EditPerson extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeBlacklist = this.onChangeBlacklist.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        lists_name: '',
        lists_phone: '',
        lists_address: '',
        lists_blacklist: false
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "/persons/"+this.props.match.params.id
        }).then(res => {
            this.setState({
                lists_name: res.data.lists_name,
                lists_phone: res.data.lists_phone
            })
        }).catch(error => {
            console.log(error);
        })
    }

    // Functions
    onChangeName = (e) => {
        this.setState({
            lists_name: e.target.value
        });
    }

    onChangePhone = (e) => {
        this.setState({
            lists_phone: e.target.value
        });
    }

    onChangeAddress = (e) => {
        this.setState({
            lists_address: e.target.value
        });
    }

    onChangeBlacklist = (e) => {
        this.setState({
            lists_blacklist: true
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const obj = {
            lists_name: this.state.lists_name,
            lists_phone: this.state.lists_phone,
            lists_address: this.state.lists_address,
            lists_blacklist: this.state.lists_blacklist
        }; 

        axios({
            method: "post",
            url: "/persons/update/"+this.props.match.params.id,
            data: obj
        }).then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render () {
        return (
            <div className="container">
                <h3>Edit Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.lists_phone}
                            onChange={this.onChangePhone}></input>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.lists_name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input 
                            type="text"
                            value={this.state.lists_address}
                            placeholder="Enter address"
                            className="form-control"
                            onChange={this.onChangeAddress}></input>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" 
                                type="checkbox"
                                onChange={this.onChangeBlacklist}></input>
                            <label className="form-check-label">Blacklist?</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Update" 
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPerson;
