import React from 'react';
import PersonLists from './PersonLists';
import CreatePerson from './CreatePerson';

const addPerson_List = () => (
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
)

export default addPerson_List;