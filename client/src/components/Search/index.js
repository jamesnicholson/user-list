import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context'
import { search, searchBar } from '../../styles'
import { SET_SEARCH_TERM } from '../../utils/enums'

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
    const [state, dispatch] = useContext(GlobalContext);
    const { users } = state;
    useEffect(() => {
        dispatch({
            type: SET_SEARCH_TERM,
              payload: {
                searchTerm: value,
              }
          });
    },[value])

    return <SearchWrapper>{input}</SearchWrapper>;
}
export default Search;
