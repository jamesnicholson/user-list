import React, { useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { searchBar } from '../styles'
import { ALPHANUMERIC_ONLY  } from './enums'

const SearchBar = styled.input`
  ${searchBar}
`
export const  useSearch = (searchTerm, users) => {
    const term = searchTerm.toLowerCase();
    const result =  users.filter((obj) =>
        JSON.stringify(obj).toLowerCase().includes(term)
    )
   return result
};

export const useInput = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null)
    const input = <SearchBar
                    value={value}
                    ref={inputRef}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    placeholder="Type to search.."
                />;
    return [value, input, inputRef];
};

export const useKeypress = (key, action) => {
    useEffect(() => {
        function onKeyup(e) {
            switch(key){
                case ALPHANUMERIC_ONLY:
                    if (/^\w+$/gi.test(e.key)) {
                        action()
                    }
                    break;
                default:
                    break;
            }
        }
        window.addEventListener('keyup', onKeyup);
        return () => window.removeEventListener('keyup', onKeyup);
    }, []);
};

export const useScroll = () => {
    const section = document.querySelector( '#1' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};