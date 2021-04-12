import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

const initialState = {
    searchField: ''
};

export const searchRobots = ( state=initialState, action={} ) =>  {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.playload })
        default: 
            return state
    }
};

const initialRobotsState = {
    isPending: true,
    error: '',
    robots: []
}

export const requestRobots = (state=initialRobotsState, action={}) => {    
        switch (action.type) {
            case REQUEST_ROBOTS_PENDING:
                return { ...state, isPending: true }
            case REQUEST_ROBOTS_SUCCESS:
                return { ...state, isPending: false, robots: action.playload }
            case REQUEST_ROBOTS_FAILED:
                return { ...state, isPending: false, error: action.playload }
            default: 
                return state
        
    }
}