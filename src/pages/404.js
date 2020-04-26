import React from 'react'
import styled from 'styled-components'

import H2 from '../components/atoms/H2'
import Container from '../components/atoms/Container'

const Explanation = styled.div`
  text-align: center;
`

const NotFoundPage = () => (
  <Container narrow>
    <H2 margin>Not found</H2>
    <Explanation>Oops, you just hit a route that doesn&#39;t exist</Explanation>
  </Container>
)

export default NotFoundPage
