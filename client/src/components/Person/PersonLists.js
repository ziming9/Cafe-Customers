import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import {Link} from 'react-router-dom';

const styles = {
    marginLeft: '2px'
}

const Lists = props => (
    <tr>
        <td>{props.lists.lists_phone} {props.lists.lists_blacklist ? <i className="far fa-frown"></i> : <span></span>}</td>
        <td>{props.lists.lists_name}</td>
        <td>{props.lists.lists_address}</td>
        <td>
            <Link to={'/edit/'+props.lists._id}
                className="btn btn-link"
                style={{textDecoration: 'none'}}>Edit</Link>
            
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

        this.state = {
            lists: [],
            auth: false
        }
    }

    componentDidMount = () => {
        this._isMounted = true;
        let urlHandler = '/persons';

        if (this.state.auth === true) {
            urlHandler = '/persons/private';
        }

        axios({
            method: 'get',
            url: urlHandler
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
        let urlHandler = '/persons';

        if (this.state.auth === true) {
            urlHandler = '/persons/private';
        }

        axios({
            method: 'get',
            url: urlHandler
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
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="container" style={{marginTop: 15}}>
                <small className="text-secondary">*Note <i className="far fa-frown"></i> = blacklist</small>
                <h3>Customers</h3>
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
                        { isAuthenticated ? this.state.auth = true : this.state.auth = false}
                        { this.personList() }
                    </tbody>
                </table>
            </div>  
        )
    }
}

const mapStatetoProps = state => ({
    auth: state.auth
})

export default connect(mapStatetoProps)(PersonLists);