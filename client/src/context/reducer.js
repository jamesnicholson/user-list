import { FETCH_USERS } from '../utils/enums'

const fetchUsers = (payload, state) => {
    return {
        ...state,
       ...payload
    };
}

const reducer = (state, action) => {
    switch(action.type){
        case FETCH_USERS :
            return fetchUsers(action.payload, state)
        default : 
           return state;
    }
}
export default reducer