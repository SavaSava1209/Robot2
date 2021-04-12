import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        playload: text
    }
};

export const requestRobots = () => (dispatch) => {
   dispatch({ type: REQUEST_ROBOTS_PENDING })
   fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, isPending: false, playload: users}))
        .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, isPending: false, playload: err}))
};