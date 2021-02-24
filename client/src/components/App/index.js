
import React from 'react'
import styled from 'styled-components'
import  Users  from '../Users'
import { title } from '../../styles'

const Title = styled.h1`
  ${title}
`
function App() {
  return (
    <div className="App">
        <Title>Hello World</Title>
        <Users />
    </div>
  );
}

export default App;
