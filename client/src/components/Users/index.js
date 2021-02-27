import React, { useContext, useEffect } from 'react'
import GlobalContext from '../../context'
import { useSearch } from '../../hooks'
import { SET_USER_COUNT } from '../../utils/enums'
import User from './User'

function Users() {
  const [state, dispatch] = useContext(GlobalContext);
  const { users, searchTerm } = state;
  const search = useSearch(searchTerm, users);
    useEffect(()=> {
        dispatch({
            type: SET_USER_COUNT,
              payload: {
                userCount: search.length,
              }
          });
    }, [searchTerm]);
    return search.map((item, index)=><User key={index} user={item} />);
}
export default Users;
