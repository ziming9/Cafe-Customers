import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreatePerson extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
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

    clearHandler = (e) => {
        this.setState({
            name: '',
            phone: '',
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newLists = {
            lists_name: this.state.name,
            lists_phone: this.state.phone
        }; 

        axios({
            method: 'post',
            url: 'persons/add',
            data: newLists
        }).then( res => console.log(res.data));

        this.setState({name: '', phone: ''});
    }

    // Forms
    render() {
        return (
            <div style={{marginTop: 20}}>
                <form>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            value={this.state.phone}
                            type="text"
                            placeholder="Enter phone number"
                            className="form-control"
                            phone={this.state.phone}
                            onChange={this.onChangePhone}></input>
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            value={this.state.name}
                            placeholder="Enter name"
                            className="form-control"
                            name={this.state.name}
                            onChange={this.onChangeName}></input>
                    </div>
                    
                    <div className="form-group">
                        <div className="btn-toolbar">
                        <div className="btn-group ml-5">
                                <button
                                    className="btn btn-info"
                                    onClick={this.clearHandler}>Clear</button>
                            </div>

                            <div className="btn-group ml-5">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={this.onSubmit}>Create</button>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePerson;