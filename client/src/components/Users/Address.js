/*
  TO NOTE!
  It appears that the location data from the api is a bit too random to display nice.
  So im creating a radmon list of nice streets
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
const randomMaps = () => {
  let list = ["48.141043,2.759071", "13.6945284,100.4913171", "-33.9060438,18.4151396", "-8.8293089,115.0854165", "22.3030169,114.1676391", "35.6586122,139.7593363", "13.0131511,80.2686751"]
  return list[Math.floor(Math.random()*list.length)];
}

function Address(props) {
  const { address } = props;
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=${randomMaps()}&zoom=15&size=150x150&key=AIzaSyCKVACXloz0J67sv0-MBoSg61gZBDZmZWc`;
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