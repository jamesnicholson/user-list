/*
  TO NOTE!
  It appears that the location data from the api is a bit too random to display nice.
  so im using a static map
 */
import React from 'react'
import styled from 'styled-components'
import { map, userAddress, addressItem, userAddressMap} from '../../styles'

const MapImg = styled.img`
  ${map}
`
const UserAddress = styled.div`
  ${userAddress}
`
const AddressItem = styled.div`
  ${addressItem}
`
const AddressAndMap = styled.div`
  ${userAddressMap}
  text-align: center;
`
function Address(props) {
  const { address } = props;
  let url = "https://static-maps.yandex.ru/1.x/?lang=en-US&ll=-73.7638,42.6564&z=15&l=map&size=150,150" 
  return (
      <AddressAndMap>
        <MapImg src={url} />
        <UserAddress>
          <AddressItem>{address.city}</AddressItem>
          <AddressItem>{address.street}</AddressItem>
          <AddressItem>{address.suite}</AddressItem>
          <AddressItem>{address.zipcode}</AddressItem>
        </UserAddress>
      </AddressAndMap>
    );
}
export default Address;