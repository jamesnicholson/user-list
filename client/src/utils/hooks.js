import React, { useState } from 'react'
import styled from 'styled-components'
import { searchBar } from '../styles'

const SearchBar = styled.input`
  ${searchBar}
`
export const  useSearch = (searchTerm, users) => {
    const term = searchTerm.toLowerCase();
    const result =  users.filter((obj) =>
        JSON.stringify(obj).toLowerCase().includes(term)
    )
   return result
}
export const useInput = () => {
    const [value, setValue] = useState("");
    const input = <SearchBar value={value} onChange={e => setValue(e.target.value)} type="text"  placeholder="Type to search.."/>;
    return [value, input];
}