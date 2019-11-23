import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Img from '../components/PreviewCompatibleImage'

import media from '../styles/mediaQueries'
import {hideBelowMobile, hideAboveMobile} from '../styles/mixins'
import Content, {HTMLContent} from '../components/Content'
import H2 from '../components/atoms/H2'
import CursiveButton from '../components/atoms/CursiveButton'
import BackButton from '../components/atoms/BackButton'
import Container from '../components/atoms/Container'
import BuyNowButton from '../components/atoms/BuyNowButton'
import ReviewItem from '../components/molecules/ReviewItem'
import HelmetHelper from '../components/molecules/HelmetHelper'

const BookTitle = styled(H2)`
  margin: 48px 0 21px;
  ${media.aboveMobile`
    margin: 48px 0;
  `}
`

const SwitchButton = styled(CursiveButton)`
  margin: 0 5px;
  ${({active, theme}) =>
    active ? 'text-decoration: underline;' : `color: ${theme.black};`}
`

const SwitchButtonsWrapper = styled.div`
  ${hideAboveMobile}
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
`
const ReviewItemsWrapper = styled.div`
  margin: 0;
  ${media.aboveMobile`
    margin: 48px 0 72px;
  `}
`

export const BookPageTemplate = ({
  title,
  content,
  reviews,
  contentComponent,
  coverSketchImage,
  buyUrl,
}) => {
  const [mobileReviewsVisible, setMobileReviewsVisible] = useState(false)
  const PageContent = contentComponent || Content

  return (
    <Container narrow>
      <BackButton />
      <HelmetHelper
        title={title}
        metaDescription="My blog is a welcoming space where I share candid, funny real-life experiences and thoughts about my personal struggles and milestones, as well as issues we all face in our everyday lives."
      />
      <Img
        style={{display: 'block', margin: '0 auto', width: 150}}
        imageInfo={coverSketchImage}
      />
      <BookTitle>{title}</BookTitle>
      <SwitchButtonsWrapper>
        <SwitchButton
          active={!mobileReviewsVisible}
          onClick={() => setMobileReviewsVisible(false)}
        >
          About
        </SwitchButton>
        <SwitchButton
          active={mobileReviewsVisible}
          onClick={() => setMobileReviewsVisible(true)}
        >
          Reviews
        </SwitchButton>
      </SwitchButtonsWrapper>
      <div css={mobileReviewsVisible && hideBelowMobile}>
        <PageContent content={content} />
      </div>
      <BuyNowButton
        href={buyUrl}
        size="lg"
        center
        css={`
          ${hideBelowMobile} margin-top: 48px;
        `}
      />
      <ReviewItemsWrapper css={!mobileReviewsVisible && hideBelowMobile}>
        {reviews.map(review => (
          <ReviewItem key={review.text} {...review} />
        ))}
      </ReviewItemsWrapper>
      <BuyNowButton
        href={buyUrl}
        size="xl"
        center
        css={`
          ${hideAboveMobile}
          margin: 48px auto;
        `}
      />
    </Container>
  )
}

const BookPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <>
      <BookPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        bookId={post.frontmatter.bookId}
        reviews={post.frontmatter.reviews}
        coverSketchImage={post.frontmatter.coverSketchImage}
        buyUrl={post.frontmatter.amazonLink}
        content={post.html}
      />
    </>
  )
}

BookPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BookPage

export const bookPageQuery = graphql`
  query BookPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        bookId
        amazonLink
        reviews {
          reviewer
          text
        }
        coverSketchImage {
          childImageSharp {
            fixed(width: 150, quality: 90) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
