
import React from 'react'
import styled from 'styled-components'
import { card, title } from '../../styles'

const Title = styled.h1`
    ${title}
`
const Card = styled.div`
    ${card}
`
function User(props) {
const { user } = props;
  return (
      <Card>
        <Title>{user.name}</Title>
      </Card> 
  );
}

export default User;
