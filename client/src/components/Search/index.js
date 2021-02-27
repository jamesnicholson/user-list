import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context'
import { useInput, useKeypress } from '../../hooks'
import { search, userCount } from '../../styles'
import { SET_SEARCH_TERM, ALPHANUMERIC_ONLY } from '../../utils/enums'

const SearchWrapper = styled.div`
  ${search}
`
const UserCount = styled.div`
  ${userCount}
`
function Search() {
    const [value, input, inputRef] = useInput();
    const [state, dispatch] = useContext(GlobalContext);
    const { userCount } = state;

    useEffect(() => {
      inputRef.current.focus()
        dispatch({
            type: SET_SEARCH_TERM,
              payload: {
                searchTerm: value,
              }
          });
    },[value])

    useKeypress(ALPHANUMERIC_ONLY, () => {
      inputRef.current.focus()
    });

    return  <SearchWrapper>
              {input}
              <UserCount>Results: { userCount }</UserCount>
            </SearchWrapper>;
}
export default Search;
