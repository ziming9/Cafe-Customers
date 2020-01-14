import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import blacklist_skull from '../assets/blacklist_skull.png';

const styles = {
    marginLeft: '2px'
}

const Lists = props => (
    <tr>
        <td>{props.lists.lists_blacklist ? <img style={{width: 15, height: 15}} src={blacklist_skull} alt="blacklist"></img>
            : <span></span>} 
            {props.lists.lists_phone}</td>
        <td>{props.lists.lists_name}</td>
        <td>{props.lists.lists_address}</td>
        <td>
            <button className="btn btn-link">
                <Link to={'/edit/'+props.lists._id}
                    style={{textDecoration: 'none'}}>Edit</Link>
            </button>
            
            <button className="btn btn-link"
                style={styles}
                onClick={() => props.deleteHandler(props.lists._id)}>Delete</button>
        </td>
    </tr>
)

class PersonLists extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.deleteHandler = this.deleteHandler.bind(this);

        this.state = {
            lists: []
        }
    }

    componentDidMount = () => {
        this._isMounted = true;

        axios({
            method: 'get',
            url: '/persons'
        }).then(res => {
            if (this._isMounted) {
                this.setState({ lists: res.data});
            } 
        }).catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    componentDidUpdate = () => {
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
                            <th>Address</th>
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