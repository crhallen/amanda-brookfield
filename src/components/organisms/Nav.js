import React, {Component} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import ButtonBase from '../atoms/ButtonBase'
import Img from '../atoms/Img'
import Sketch from '../atoms/Sketch'
import media from '../../styles/mediaQueries'
import H2 from '../atoms/H2'

import close from '../../img/cursive-close.svg'
import menuIcon from '../../img/menu-icon.svg'

const menuWidth = '220px'
const shiftDistance = '230px'

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: -${shiftDistance};
  display: grid;
  grid-auto-rows: min-content;
  width: ${menuWidth};
  height: 100vh;
  padding: 0 24px;
  transform: translateX(0);
  transition: transform 200ms ease-in;
  background: white;
  box-shadow: 2px 0 4px 0 rgba(38, 40, 42, 0.25);
  z-index: 2;
  &.slideIn {
    transform: translateX(${shiftDistance});
  }
  ${media.aboveMobile`
    display: none;
  `}
`

const MobileHamburger = styled(ButtonBase)`
  background-image: url(${menuIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 24px;
  top: 24px;
  ${media.aboveMobile`
    display: none;
  `}
`
const CloseNavButton = styled(ButtonBase)`
  width: 16px;
  height: 16px;
  margin: 24px 0 20px;
  padding: 0;
  cursor: pointer;
`

const BackdropClickTarget = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const NavItemWrapper = styled.div`
  a {
    color: ${({theme}) => theme.black};
    text-decoration: none;
    &:hover {
      color: ${({theme}) => theme.red};
    }
  }
  ${media.aboveMobile`
    margin: 0 10px;
  `}
`

const NavLinkText = styled(H2)`
  /* mobile only */
  padding: 24px 0 20px;
  border-bottom: solid 1px ${({theme}) => theme.lightGrey};
  .active & {
    color: ${({theme}) => theme.red};
  }
  ${media.aboveMobile`
    /* reset mobile styles */
    padding: 0;
    border-bottom: 0;
    /* own styles */
    text-align: center;
    margin-top: 8px;
  `}
`

const DesktopNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 32px auto 70px;
  max-width: 708px;
  justify-content: space-around;
  padding: 0 20px;
  ${media.belowMobile`
    display: none;
  `}
`

const NavLinks = [
  {to: '/', text: 'Home', name: 'books', mobileOnly: true},
  {to: '/books', name: 'books', text: 'Books'},
  {to: '/author', name: 'author', text: 'Author'},
  {to: '/blog', name: 'blog', text: 'Blog'},
  {to: '/features', name: 'features', text: 'Features'},
  {to: '/events', name: 'events', text: 'Events'},
]

const NavItem = ({text, to, name, handleClick = () => null}) => (
  <NavItemWrapper key={text}>
    <Link
      to={to}
      getProps={props => {
        const {isCurrent, isPartiallyCurrent, href, location} = props
        return isCurrent ||
          (href !== '/' && isPartiallyCurrent) ||
          // TODO remove this
          (href === '/books' && location.pathname.startsWith('/articles')) ||
          (href === '/books' && location.pathname.startsWith('/short-stories'))
          ? {className: 'active'}
          : null
      }}
      onClick={handleClick}
    >
      <Sketch
        css={`
          ${media.belowMobile`display: none;`}
        `}
        type={name}
        hoverComponent={NavItemWrapper}
      />
      <NavLinkText>{text}</NavLinkText>
    </Link>
  </NavItemWrapper>
)

class Nav extends Component {
  state = {isMobileNavVisible: false}
  hideMobileNav = () => this.setState({isMobileNavVisible: false})
  showMobileNav = () => this.setState({isMobileNavVisible: true})
  render() {
    const {isMobileNavVisible} = this.state
    return (
      <div>
        <>
          <MobileHamburger onClick={this.showMobileNav} />
          {isMobileNavVisible && (
            <BackdropClickTarget onClick={this.hideMobileNav} />
          )}
          <MobileNav className={isMobileNavVisible ? 'slideIn' : ''}>
            <CloseNavButton onClick={this.hideMobileNav}>
              <Img src={close} />
            </CloseNavButton>
            {NavLinks.map(item => (
              <NavItem
                key={item.text}
                {...item}
                handleClick={this.hideMobileNav}
              />
            ))}
          </MobileNav>
        </>
        <DesktopNav>
          {NavLinks.map(
            item => !item.mobileOnly && <NavItem key={item.text} {...item} />,
          )}
        </DesktopNav>
      </div>
    )
  }
}

export default Nav
