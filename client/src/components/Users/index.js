
import React, { useContext } from 'react'
import GlobalContext from '../../context'
import User from './User'
function Users() {
    const [state, actions] = useContext(GlobalContext);
    const { users } = state;
    return users.map((item, index)=><User key={index} user={item} />);
}
export default Users;
