import { FETCH_USERS, SET_SEARCH_TERM, SET_USER_COUNT, SET_LOADING } from '../utils/enums'

const fetchUsers = (payload, state) => {
    return {
        ...state,
       ...payload
    };
};

const setSearchTerm = (payload, state) => {
    return {
        ...state,
        searchTerm: payload.searchTerm
    };
};

const setUserCount = (payload, state) => {
    return {
        ...state,
        userCount: payload.userCount
    };
};

const setLoading = (payload, state) => {
    return {
        ...state,
        loading: payload.loading
    };
};
const reducer = (state, action) => {
    switch(action.type){
        case FETCH_USERS :
            return fetchUsers(action.payload, state)
        case SET_SEARCH_TERM :
            return setSearchTerm(action.payload, state)
        case SET_USER_COUNT :
            return setUserCount(action.payload, state)
        case SET_LOADING :
            return setLoading(action.payload, state)
        default : 
           return state;
    };
};
export default reducer;