import React from 'react'
import styled from 'styled-components'

import H2 from '../atoms/H2'
import media from '../../styles/mediaQueries'
import {kalamFont} from '../../styles/mixins'
import Link from '../atoms/Link'

const Background = styled(Link)`
  display: block;
  flex: 1 0 auto;
  border-radius: 5px;
  height: 150px;
  cursor: pointer;
  margin: 12px;
  background-size: cover;
  background-position: center;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
  ${media.aboveMobile`
    height: 180px;
  `}
`

const ReadMore = styled.div`
  ${kalamFont};
  letter-spacing: 2px;
  opacity: 1;
  transition: opacity 200ms ease-in-out;
  ${media.aboveMobile`
    opacity: 0;
  `}
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  &:hover ${ReadMore} {
    opacity: 1;
  }
`

const AuthorNavItem = ({title, to, img}) => {
  return (
    <Background
      css={`
        background-image: url(${img});
      `}
      to={to}
    >
      <Overlay>
        <H2 css={'margin: 16px 0 8px;'}>{title}</H2>
        <ReadMore>Read More</ReadMore>
      </Overlay>
    </Background>
  )
}

export default AuthorNavItem
