
import React from 'react'
import styled from 'styled-components'
import { title } from '../../styles'
function App() {
  const Title = styled.h1`
    ${title}
  `
  return (
    <div className="App">
        <Title>Hello World</Title>
    </div>
  );
}

export default App;
