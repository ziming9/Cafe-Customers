import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePerson from '../components/CreatePerson'
import PersonLists from '../components/PersonLists';
import Auxiliary from './Auxiliary';

const homeScreen = props => (
    <Auxiliary>
        <div className="row" style={{margin: 20}}>
            <div className="col-md-7 ml-auto" >
                <PersonLists></PersonLists>
            </div>
            <div className="col-md-3 mr-auto">
                <CreatePerson></CreatePerson>
            </div>
        </div>
    </Auxiliary>
)

export default homeScreen;