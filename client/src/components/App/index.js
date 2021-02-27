
import React, { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context'
import { title, appPage } from '../../styles'
import  Users  from '../Users'
import  Search  from '../Search'
import LoadingIndicator from '../LoadingIndicator'

const AppPage = styled.div`
  ${appPage}
  opacity: ${props => props.opacity};
`
const Title = styled.h1`
  ${title}
`
function App() {
  const [state] = useContext(GlobalContext);
  const { loading } = state;

return <>
        <LoadingIndicator opacity={loading ? 1 : 0} />
        <AppPage opacity={!loading ? 1 : 0}>
          <Title>User list app</Title>
          <Search />
          <Users />
        </AppPage>
      </>
}

export default App;
