import React from 'react'
import styled from 'styled-components'

import Img from '../atoms/Img'
import SketchButton from '../atoms/SketchButton'
import H2 from '../atoms/H2'
import SocialMediaLinks from '../molecules/SocialMediaLinks'

import contactImg from '../../img/contact.gif'

import emailIcon from '../../img/email-icon.svg'

const FooterWrapper = styled.div`
  background-color: #eff1f3;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactHeading = styled(H2)`
  margin: 32px 0;
`

const Copyright = styled.div`
  font-size: 12px;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Img css={'width: 75px;'} src={contactImg} />
      <ContactHeading>Contact</ContactHeading>
      <SketchButton
        as="a"
        href="mailto:contact@amandabrookfield.co.uk"
        size="xl"
        uppercase
      >
        <Img src={emailIcon} css={'margin-right: 10px;'} />
        Email Amanda
      </SketchButton>
      <SocialMediaLinks />
      <Copyright>&copy; Amanda Brookfield 2020</Copyright>
    </FooterWrapper>
  )
}
