
import React from 'react'
import styled from 'styled-components'
import { loaderRotate , loadingPage } from '../../styles'

const LoadingPage = styled.div`
  ${loadingPage}
  opacity: ${props => props.opacity};
  z-index: ${props => props.opacity === 1 ? 9 : -1 }
`
const LoadingRotate = styled.div`
  ${loaderRotate}
`
function LoadingIndicator(props) {
    const { opacity } = props
  return    <LoadingPage opacity={opacity}>
                 <LoadingRotate>&#10033;</LoadingRotate>
            </LoadingPage> 
}

export default LoadingIndicator;
