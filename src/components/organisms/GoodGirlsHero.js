import React from 'react'
import styled from 'styled-components'
import Img from '../PreviewCompatibleImage'

import Link from '../atoms/Link'
import Container from '../atoms/Container'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import H2 from '../atoms/H2'
import P from '../atoms/P'
import BuyNowButton from '../atoms/BuyNowButton'
// import goodGirlsTop from '../../img/good-girls-top.png'

import {hideBelowMobile} from '../../styles/mixins'
import media from '../../styles/mediaQueries'

const getBackgroundSrc = (srcSet, minWidth) => {
  // Make this compatible with the CMS preview
  // Crop the image using css or some other way
  try {
    const backgrounds = srcSet.split(',').map(background => {
      const splitPosition = background.lastIndexOf(' ')
      return {
        src: background.slice(0, splitPosition),
        width: Number(background.slice(splitPosition + 1, -1)) || 0, // to just get the number without the w
      }
    })

    const {src = ''} =
      backgrounds.find(v => v.width > minWidth) || backgrounds.pop()

    return src
  } catch (err) {
    return ''
  }
}

const HeroSection = styled.section`
  background: ${({theme}) => theme.blue};
  color: #ffffff;
  position: relative;
  ${media.belowMobile`
    &::before {
      content: '';
      background-image: url(${({background}) =>
        getBackgroundSrc(background, 500)});
      background-size: cover;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }`}
`

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.aboveMobile`
    flex-direction: row;
  `}
`

const MainSection = styled.div`
  position: relative;
  padding: 24px 0;
  width: 100%;
  ${media.aboveMobile`
    align-self: auto;
  `}
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`

const BlurbBody = styled(P)`
  font-size: 14px;
  margin-bottom: 48px;
  position: relative;
  ${media.aboveMobile`
    padding-right: 40px;
  `}
`

const ReadMoreLink = styled(Link)`
  display: block;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff !important;
  text-decoration: none;
  width: 166px;
  padding: 10px 5px;
  margin: 16px 0 32px;
  ${media.aboveContainer`
    margin-bottom: 0;
  `}
  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`

const ImgHolder = styled.div`
  width: 276px;
  flex: 1 0 auto;
  align-self: center;
  ${hideBelowMobile}
`

export default function GoodGirlsHero({
  title,
  text,
  readMoreText,
  readMorePath,
  buyUrl,
  coverImage,
}) {
  return (
    <HeroSection
      background={coverImage.childImageSharp.fluid.srcSet}
      x={console.log(coverImage)}
    >
      <HeroContainer>
        <MainSection>
          <RobotoCapsTitle>NEW</RobotoCapsTitle>
          <H2 css={'text-align: left; margin: 20px 0 16px;'}>{title}</H2>
          <BlurbBody>{text}</BlurbBody>
          <BuyNowButton styleType="blue" href={buyUrl} size="md" />
          <ReadMoreLink to={readMorePath}>{readMoreText}</ReadMoreLink>
        </MainSection>
        <ImgHolder>
          {/* DONT DOWNLOAD THIS IMAGE ON MOBILE? */}
          <Img imageInfo={coverImage} />
        </ImgHolder>
      </HeroContainer>
    </HeroSection>
  )
}
