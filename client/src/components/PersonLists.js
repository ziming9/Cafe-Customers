import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const styles = {
    color: '#0000EE'
}

const Lists = props => (
    <tr>
        <td>{props.lists.lists_phone}</td>
        <td>{props.lists.lists_name}</td>
        <td>
            <Link to={'/edit/'+props.lists._id}>Edit</Link> /
            <span 
                style={styles} 
                onClick={() => props.deleteHandler(props.lists._id)}> Delete</span>
        </td>
    </tr>
)

class PersonLists extends Component {
    constructor(props) {
        super(props);

        this.deleteHandler = this.deleteHandler.bind(this);

        this.state = {
            lists: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'get',
            url: '/persons'
        }).then(res => {
            this.setState({ lists: res.data});
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate = () =>{
        axios({
            method: 'get',
            url: '/persons',
        }).then(res => {
            this.setState({ lists: res.data});
        }).catch(err => {
            console.log(err);
        })
    }

    deleteHandler = (_id) => {
        axios({
            method: 'delete',
            url: '/persons/delete/'+_id,
        }).then(res => {
            this.state.lists.splice(_id, 1);
        }).catch(error => {
            console.log(error);
        })
    }

    personList() {
        return this.state.lists.map((currentList, i) => {
            return <Lists
                key={i}
                lists={currentList}
                deleteHandler={this.deleteHandler}> </Lists>
        })
    }

    render() {
        return (
        <div className="container" style={{marginTop: 20}}>
                <h3>Person Lists</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Phone</th>
                            <th>Name</th>
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