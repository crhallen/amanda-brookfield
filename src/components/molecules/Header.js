import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {kalamFont, crimsonTextFont} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const HeaderWrapper = styled.div`
  padding: 16px 16px 12px 16px;
  text-align: center;
  a {
    text-decoration: none;
  }
  ${media.aboveMobile`
    padding: 72px 16px 16px 16px;
  `}
`

const MainTitle = styled.h1`
  ${crimsonTextFont}
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.5px;
  color: #26282a;
  text-transform: uppercase;
  margin-bottom: 1px;
  ${media.aboveMobile`
    line-height: 1.25;
    letter-spacing: 0.8px;
    font-size: 24px;
    margin: 2px 0 4px;
  `}
`

const SubTitle = styled.h2`
  ${kalamFont}
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 1.6;
  margin: 0;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <div
        css={`
          display: flex;
          justify-content: center;
        `}
      >
        <Link to="/">
          <MainTitle>Amanda Brookfield</MainTitle>
          <SubTitle>Best-Selling Novelist</SubTitle>
        </Link>
      </div>
    </HeaderWrapper>
  )
}

export default Header
