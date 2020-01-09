import React, {Component} from 'react';
import axios from 'axios';

class EditPerson extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        lists_name: '',
        lists_phone: ''
    }

    componentDidMount() {
        axios.get('https://cafe-customers.herokuapp.com//lists/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    lists_name: response.data.lists_name,
                    lists_phone: response.data.lists_phone
                })
            })
            .catch(error => {
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

    onSubmit = (e) => {
        e.preventDefault();

        const obj = {
            lists_name: this.state.lists_name,
            lists_phone: this.state.lists_phone
        }; 

        axios.post('https://cafe-customers.herokuapp.com/lists/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/lists');
    }

    render () {
        return (
            <div className="container">
                <h3>Edit Person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.lists_name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.lists_phone}
                            onChange={this.onChangePhone}></input>
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
