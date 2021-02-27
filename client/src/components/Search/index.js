import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context'
import { search } from '../../styles'
import { SET_SEARCH_TERM } from '../../utils/enums'
import { useInput } from '../../utils/hooks'

const SearchWrapper = styled.div`
  ${search}
`
function Search() {
    const [value, input] = useInput();
    const [state, dispatch] = useContext(GlobalContext);
    const { userCount } = state;
    useEffect(() => {
        dispatch({
            type: SET_SEARCH_TERM,
              payload: {
                searchTerm: value,
              }
          });
    },[value])

    return  <SearchWrapper>
              {input}
              <div>Results: { userCount }</div>
            </SearchWrapper>;
}
export default Search;
