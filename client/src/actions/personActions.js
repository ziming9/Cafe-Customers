import axios from "axios";
import { GET_ERRORS, ADD_POST } from "./types";

// Add Person
export const createPerson = personData => dispatch => {
    axios({
        method: 'post',
        url: 'persons/add',
        data: personData
    })
    .then(res => dispatch({
        type: ADD_POST,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

// Add Private Person
export const createPrivatePerson = personData => dispatch => {
    axios({
        method: 'post',
        url: 'persons/p_add',
        data: personData
    })
    .then(res => dispatch({
        type: ADD_POST,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
}


  