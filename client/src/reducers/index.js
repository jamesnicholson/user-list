import { FETCH_USERS, SET_SEARCH_TERM } from '../utils/enums'

const fetchUsers = (payload, state) => {
    return {
        ...state,
       ...payload
    };
}

const setSearchTerm = (payload, state) => {
    return {
        ...state,
        searchTerm: payload.searchTerm
    };
}

const reducer = (state, action) => {
    switch(action.type){
        case FETCH_USERS :
            return fetchUsers(action.payload, state)
        case SET_SEARCH_TERM :
            return setSearchTerm(action.payload, state)
        default : 
           return state;
    }
}
export default reducer