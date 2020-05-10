import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'

import Img from '../PreviewCompatibleImage'
import H2 from '../atoms/H2'
import media from '../../styles/mediaQueries'
import {kalamFont} from '../../styles/mixins'
import theme from '../../styles/theme'

const WrapperLink = styled(Link)`
  position: relative;
  flex: 1;
  display: block;
  border-radius: 5px;
  height: 150px;
  cursor: pointer;
  margin: 12px;
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

const BackgroundImage = styled(Img)`
  height: 100%;
  width: 100%;
  position: absolute !important;
  top: 0;
  left: 0;
  border-radius: 5px;
  opacity: 0.6;
  z-index: -1;
  object-fit: cover;
`

const h2mods = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  ${kalamFont};
  color: inherit;
  ${media.belowMobile`
    font-size: 16px;
  `}
`

const AuthorNavItem = ({title, to, imageInfo}) => {
  return (
    <WrapperLink
      to={to}
      getProps={({isCurrent}) => {
        return isCurrent
          ? {style: {color: theme.red, textDecoration: 'underline'}}
          : null
      }}
    >
      <BackgroundImage imageInfo={imageInfo} />
      <H2 css={h2mods}>{title}</H2>
    </WrapperLink>
  )
}

export default AuthorNavItem
