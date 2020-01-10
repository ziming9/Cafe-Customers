import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreatePerson extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // States 
    state = {
        name: '',
        phone: '',
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

    onSubmit = (e) => {
        e.preventDefault();

        const newLists = {
            lists_name: this.state.name,
            lists_phone: this.state.phone
        }; 

        // Using axios.post to send HTTP request to backend

        axios.post('https://cafe-customers.herokuapp.com/lists/add', newLists).then(res => console.log(res.data));

        this.setState({name: '', phone: ''});
    }

    // Forms
    render() {
        return (
            <div style={{marginTop: 20}}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="text"
                            className="form-control"
                            phone={this.state.phone}
                            onChange={this.onChangePhone}></input>
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            name={this.state.name}
                            onChange={this.onChangeName}></input>
                    </div>
                    
                    <div className="form-group">
                        <div className="row">
                            <button
                                style={{padding: 2}} 
                                type="submit"
                                className="col-md-4 btn btn-primary">Create</button>
                            <button
                                type="submit"
                                className="col-md-4 btn btn-danger">Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePerson;