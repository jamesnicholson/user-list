
import React from 'react'
import styled from 'styled-components'
import { card, cardTitle, cardItem, userDetails, cardConent } from '../../styles'
import Address from './Address'

const Card = styled.div`
  ${card}
`
const CardConent = styled.div`
  ${cardConent}
`
const UserDetails = styled.div`
  ${userDetails}
`
const CardTitle = styled.div`
  ${cardTitle}
`
const CardItem = styled.div`
  ${cardItem}
`
function User(props) {
  const { user } = props;
  console.log(user)
  return (
      <Card>
        <CardConent>
          <UserDetails>
            <CardTitle>{user.name}</CardTitle>
            <CardItem>{user.username}</CardItem>
            <CardItem>{user.phone}</CardItem>
            <CardItem>{user.email}</CardItem>
            <CardItem>{user.website}</CardItem>
          </UserDetails>
        </CardConent>
        <CardConent>
          <Address address={user.address} />
        </CardConent>
      </Card> 
  );
}

export default User;
