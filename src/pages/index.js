import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Responsive from '../components/atoms/Responsive'
import Img from '../components/atoms/Img'
import H2 from '../components/atoms/H2'
import BookWidget from '../components/molecules/BookWidget'
import bannerMobile1x from '../img/home-banner-mobile.jpg'
import bannerMobile2x from '../img/home-banner-mobile@2x.jpg'
import bannerMobile3x from '../img/home-banner-mobile@3x.jpg'
import bannerDesktop1x from '../img/home-banner-desktop.jpg'
import bannerDesktop2x from '../img/home-banner-desktop@2x.jpg'
import bannerDesktop3x from '../img/home-banner-desktop@3x.jpg'
import {CrimsonTextFont} from '../styles/mixins'

const BannerImage = styled(Img)`
  width: 100%;
  height: auto;
`

const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 764px;
  margin: 0 auto;
  padding: 0 23px;
`
const WelcomeText = styled.div`
  width: 486px;
  margin: 48px auto 0;
  text-align: center;
  line-height: 1.86;
`
const FirstLetter = styled.span`
  ${CrimsonTextFont}
  font-weight: normal;
  float: left;
  font-size: 48px;
  line-height: 48px;
  transform: translateX(8px);
`

const HomeH2 = styled(H2)`
  margin: 72px 0;
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Responsive.Mobile>
            {matches =>
              matches ? (
                <BannerImage
                  srcSet={[bannerMobile1x, bannerMobile2x, bannerMobile3x]}
                />
              ) : (
                <BannerImage
                  srcSet={[bannerDesktop1x, bannerDesktop2x, bannerDesktop3x]}
                />
              )
            }
          </Responsive.Mobile>
          <WelcomeText>
            <FirstLetter>W</FirstLetter>elcome to my official website. There’s
            lots to dip into, with sneak-peeks at my inspirations as well as
            information about all my fifteen best-sellers, including Alice
            Alone, Relative Love and Life Begins.
          </WelcomeText>
          <HomeH2>My Best Sellers</HomeH2>
          <BookWidget />
        </Container>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}
