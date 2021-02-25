
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context'
import { search, searchBar } from '../../styles'

const SearchWrapper = styled.div`
  ${search}
`
const SearchBar = styled.input`
  ${searchBar}
`
function useInput(){
    const [value, setValue] = useState("");
    const input = <SearchBar value={value} onChange={e => setValue(e.target.value)} type="text" />;
    return [value, input];
}

function Search() {
    const [value, input] = useInput();
    const [state, actions] = useContext(GlobalContext);
    const { users } = state;
    return <SearchWrapper>{input}</SearchWrapper>;
}
export default Search;
