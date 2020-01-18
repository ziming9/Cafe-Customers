import {ADD_POST} from '../actions/types';

const initialState = {
    person: []
}

const personReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                person: [action.payload, ...state.person]
            }
        default:
            return state;
    }
}

export default personReducer;

