
import React from 'react'
import styled from 'styled-components'
import  Users  from '../Users'
import  Search  from '../Search'
import { title } from '../../styles'

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
