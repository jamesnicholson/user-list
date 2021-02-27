
import React from 'react'
import styled from 'styled-components'
import { title } from '../../styles'
import  Users  from '../Users'
import  Search  from '../Search'

const Title = styled.h1`
  ${title}
  max-width:600px;
  margin: 0 auto;
`
function App() {
  return (
    <div className="App">
        <Title>User list app</Title>
        <Search />
        <Users />
    </div>
  );
}

export default App;
