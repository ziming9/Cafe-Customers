import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePerson from '../components/Person/CreatePerson'
import PersonLists from '../components/Person/PersonLists';
import Auxiliary from './Auxiliary';

const homeScreen = props => (
    <Auxiliary>
        <div className="container">
        <div className="row" style={{margin: 20}}>
            <div className="col-md-8 ml-auto" >
                <PersonLists></PersonLists>
            </div>
            <div className="col-md-4 mr-auto">
                <CreatePerson></CreatePerson>
            </div>
        </div>
        </div>
        
    </Auxiliary>
)

export default homeScreen;