import React, { useContext, useEffect, useRef, createRef } from 'react'
import GlobalContext from '../../context'
import { useSearch } from '../../hooks'
import { SET_USER_COUNT } from '../../utils/enums'
import User from './User'

function Users() {
  const [state, dispatch] = useContext(GlobalContext);
  const { users, searchTerm, scrollIndex} = state;
  const search = useSearch(searchTerm, users);
  const userRefs = useRef([]);
  userRefs.current = search.map((_, i) => userRefs.current[i] ?? createRef());
  useEffect(()=> {
    dispatch({
        type: SET_USER_COUNT,
          payload: {
            userCount: search.length,
          }
      });
  }, [searchTerm]);
  return search.map((item, index)=><div ref={userRefs.current[index]} key={index}> <User user={item} /> </div>);
}
export default Users;
