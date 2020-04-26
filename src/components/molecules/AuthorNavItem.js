import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'

import H2 from '../atoms/H2'
import media from '../../styles/mediaQueries'
import {kalamFont} from '../../styles/mixins'
import theme from '../../styles/theme'

const Background = styled(Link)`
  display: block;
  flex: 1 0 auto;
  border-radius: 5px;
  height: 150px;
  cursor: pointer;
  margin: 12px;
  background-size: cover;
  background-position: center;
  background-image: url(${({img}) => img});
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: black;
  }
  ${media.aboveMobile`
    height: 180px;
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
`

const h2mods = css`
  margin: 16px 0 8px;
  ${kalamFont};
  color: inherit;
`

const AuthorNavItem = ({title, to, img}) => {
  return (
    <Background
      img={img}
      to={to}
      getProps={({isCurrent}) => {
        return isCurrent
          ? {style: {color: theme.red, textDecoration: 'underline'}}
          : null
      }}
    >
      <Overlay>
        <H2 css={h2mods}>{title}</H2>
      </Overlay>
    </Background>
  )
}

export default AuthorNavItem
