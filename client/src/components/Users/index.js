import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../context'
import User from './User'


function Users() {
    const [searchResult, setSearchResult] = useState([]);
    const [state, actions] = useContext(GlobalContext);
    const { users, searchTerm } = state;
    const searchUsers = (searchTerm, users) => {
        const term = searchTerm.toLowerCase();
        const result =  users.filter((obj) =>
            JSON.stringify(obj).toLowerCase().includes(term)
        )
        setSearchResult(result)
    }
     
    useEffect(() => { 
        searchUsers(searchTerm, users);
    },[searchTerm]);

    useEffect(() => {
        setSearchResult(users)
    },[users])

    return searchResult.map((item, index)=><User key={index} user={item} />);
}
export default Users;
