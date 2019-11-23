import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {parseISO, isValid} from 'date-fns'

import PreviewCompatibleImg from '../PreviewCompatibleImage'
import Link from '../atoms/Link'
import ExternalLink from '../atoms/ExternalLink'
import Container from '../atoms/Container'
import RobotoCapsTitle from '../atoms/RobotoCapsTitle'
import Img from '../atoms/Img'
import SketchButton from '../atoms/SketchButton'
import media from '../../styles/mediaQueries'
import Content, {HTMLContent} from '../Content'

import close from '../../img/close.svg'

const BackDrop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({theme}) => theme.blue};
  color: ${({theme}) => theme.white};
  padding: 0;
  box-shadow: 0 -2px 4px 0 rgba(38, 40, 42, 0.25);
  a {
    text-decoration: underline;
    color: currentColor;
    &:hover {
      color: currentColor;
    }
  }
`

const AnnouncementContainer = styled(Container)`
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  /* pseudo element below is just for cms preview  */
  &:after {
    content: 'Announcement disabled';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.7);
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #333;
    display: none;
    ${({isDisabled}) => isDisabled && 'display: flex;'}
  }
`
const StyledContent = styled.div`
  &,
  p {
    line-height: 1.5;
  }
  p {
    margin-bottom: 8px;
  }
  p:last-child {
    margin: 0;
  }
`

const CloseIcon = styled(Img)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  margin-top: -8px;
  margin-right: -8px;
  cursor: pointer;
`
const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* ${media.aboveMobile`

  `} */
`

const ImageWrapper = styled.div`
  flex: 2 0 auto;
  width: 100px;
`

const ButtonWrapper = styled.div`
  align-self: center;
  margin: 24px 0 0;
`

export const AnnouncementTemplate = ({
  hide = () => null,
  title,
  content,
  buttonLink,
  buttonText,
  contentComponent,
  isDisabled = false, //this prop is just for cms
  image,
}) => {
  const AnnouncementContent = contentComponent || Content

  return (
    <BackDrop>
      <AnnouncementContainer isDisabled={isDisabled}>
        <div css="position: relative;">
          <RobotoCapsTitle>{title}</RobotoCapsTitle>
          <CloseIcon src={close} onClick={hide} />
          <ResponsiveWrapper>
            <div style={{flex: '1 0 auto'}}>
              <StyledContent>
                <AnnouncementContent content={content} />
              </StyledContent>
              {buttonLink && buttonText && (
                <ButtonWrapper onClick={hide}>
                  <SketchButton
                    as={buttonLink.startsWith('/') ? Link : ExternalLink}
                    //TODO - fix this clash
                    to={buttonLink}
                    href={buttonLink}
                    styleType="blue"
                    uppercase
                  >
                    {buttonText}
                  </SketchButton>
                </ButtonWrapper>
              )}
            </div>
            <ImageWrapper>
              <PreviewCompatibleImg imageInfo={image} />
            </ImageWrapper>
          </ResponsiveWrapper>
        </div>
      </AnnouncementContainer>
    </BackDrop>
  )
}

const Announcement = () => {
  const {
    allMarkdownRemark: {
      edges: {
        [0]: {node: announcement},
      },
    },
  } = useStaticQuery(
    graphql`
      query Announcement {
        allMarkdownRemark(
          limit: 1
          filter: {fileAbsolutePath: {regex: "/(announcement)/"}}
          sort: {order: DESC, fields: [frontmatter___date]}
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                buttonLink
                buttonText
                isDisabled
                displayUntil
                image {
                  childImageSharp {
                    fluid(maxWidth: 276) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )
  const {
    html,
    frontmatter: {
      title,
      buttonLink,
      buttonText,
      isDisabled,
      displayUntil,
      image,
    },
  } = announcement

  const [isClosed, setClosed] = useState(true)
  const [isExpired, setExpired] = useState(false)

  const close = () => {
    sessionStorage.setItem('announcementClosed', 'true')
    setClosed(true)
  }

  useEffect(() => {
    const announcementString = JSON.stringify(announcement)
    const existingAnnouncement = sessionStorage.getItem('announcement')
    const isNewAnnouncement = announcementString !== existingAnnouncement
    sessionStorage.setItem('announcement', announcementString)
    if (isNewAnnouncement) {
      sessionStorage.setItem('announcementClosed', 'false')
    }
    if (
      isNewAnnouncement ||
      sessionStorage.getItem('announcementClosed') === 'false'
    ) {
      setClosed(false)
    }
  }, [])

  useEffect(() => {
    const displayUntilDate = parseISO(displayUntil)
    const expired = isValid(displayUntilDate)
      ? new Date() > displayUntilDate
      : false
    setExpired(expired)
  }, [])

  if (isDisabled || isClosed || isExpired) {
    return null
  }

  return (
    <AnnouncementTemplate
      hide={close}
      title={title}
      content={html}
      buttonLink={buttonLink}
      buttonText={buttonText}
      contentComponent={HTMLContent}
      image={image}
    />
  )
}

export default Announcement
