import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const styles = {
    color: '#0000EE'
}

const Lists = props => (
    <tr>
        <td>{props.lists.lists_name}</td>
        <td>{props.lists.lists_phone}</td>
        <td>
            <Link to={'/edit/'+props.lists._id}>Edit</Link> /
            <span style={styles}onClick={() => props.onDelete(props.lists._id)}> Delete</span>
        </td>
    </tr>
)

class PersonLists extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);

        state = {
            lists: []
        }
    }

    componentDidMount() {
        axios.get('https://cafe-customers.herokuapp.com/lists')
            .then(response => {
                this.setState({ lists: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('https://cafe-customers.herokuapp.com/lists/')
            .then(response => {
                this.setState({ lists: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    personList = () => {
        return this.state.lists.map((currentList, i) => {
            return <Lists 
                lists={currentList}
                onDelete={this.onDelete}
                key={i}> </Lists>
        })
    }

    onDelete(_id) {
        axios.delete('https://cafe-customers.herokuapp.com/lists/delete/'+_id)
            .then(response => {
                this.state.lists.splice(_id, 1);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
        <div className="container" style={{marginTop: 20}}>
                <h3>Person Lists</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.personList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PersonLists;